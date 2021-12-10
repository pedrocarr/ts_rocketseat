"use strict";
/**
 * name - string
 * duration - number
 * education - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute(name, duration, educator) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
