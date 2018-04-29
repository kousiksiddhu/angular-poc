export class CoursesService {
    constructor(){

    }
    getCourses (){
        return ['Docker', 'NodeJs', 'Block Chain'];
    }

    getComplexObj(){
        return [{
            id: 80001,
            description: {
                title: 'Hello',
                description: 'This is siddhu'
            } 
        }]
    }
}