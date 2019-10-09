var gulp = require("gulp")
var sass = require("gulp-sass")

gulp.task("sass",function(done){
    gulp.src("./one/liu.scss")
    .pipe(sass())
    .pipe(gulp.dest("./one"))
    done()
});

