import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";


export function createCourse(req: Request, res: Response) {

    CreateCourseService.execute("NodeJS", 222, "Pedro");

    return res.send();

}