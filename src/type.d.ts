export interface Post{
    _id:string;
    title:string;
    _createdAt:Date;
    mainImage:{
        asset:{
            url:string;
        };
    };
    publishedAt:Date;
    author:{
        name:string;
        image:string;
    };
    slug:string;
    
    body:[object];
}