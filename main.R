args <- commandArgs(T);

r <- function (src){
  rmarkdown::render(src, output_dir = './output/');
};

r(args[1]);
