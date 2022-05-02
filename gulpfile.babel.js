import gulp from "gulp";
import del from "del";
import autoPrefixer from "gulp-autoprefixer";
import miniCSS from "gulp-csso";
import image from "gulp-image";
import ws from "gulp-webserver";
import bro from "gulp-bro";
import uglifyify from "uglifyify";
import babelify from "babelify";

const sass = require("gulp-sass")(require("node-sass"));

const routes = {
  html: {
    watch: "src/**/*.html",
    src: "src/*.html",
    dest: "build",
  },
  scss: {
    watch: "src/scss/**/*.scss",
    src: "src/scss/style.scss",
    dest: "build/css",
  },
  img: {
    src: "src/img/*",
    dest: "build/img",
  },
  js: {
    watch: "src/js/**/*.js",
    src: "src/js/main.js",
    dest: "build/js",
  },
};

const clean = () => del(["build/"]);

const html = () => gulp.src(routes.html.src).pipe(gulp.dest(routes.html.dest));

const styles = () =>
  gulp
    .src(routes.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoPrefixer())
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.scss.dest));

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(
      bro({
        transform: [
          babelify.configure({ presets: ["@babel/preset-env"] }),
          ["uglifyify", { global: true }],
        ],
      })
    )
    .pipe(gulp.dest(routes.js.dest));

const webserver = () =>
  gulp.src("build").pipe(ws({ livereload: true, open: true }));

const watch = () => {
  gulp.watch(routes.html.watch, html);
  gulp.watch(routes.scss.watch, styles);
  gulp.watch(routes.js.watch, js);
};

const prepare = gulp.series([clean]);

const assets = gulp.series([html, styles, js]);

const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
