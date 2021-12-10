/**
 * name - string
 * duration - number
 * education - string 
 */

class CreateCourseService {
    execute(name: string, duration: number, educator: string) {
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();