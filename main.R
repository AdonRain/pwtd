render <- function (s){
  src <- paste('src/pwtd-', s, '.rmd', sep = '');
  rmarkdown::render(src, output_dir = './output/');
}
