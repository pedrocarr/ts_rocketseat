// eslint-disable-next-line import/no-unresolved
import { parse as csvParse } from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {
    console.log("I am here");
  }
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
