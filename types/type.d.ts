export interface Posts={
    _id:string;
    title:string;
    _createdAt:Date;
    description:string;
    mainImage:{
        asset:{
            url:string;
        };
    };
    comments:Comments[];
    publishedAt:Date;
    author:{
        name:string;
        image:string;
    };
    slug:string;
    
    body:[object];
}