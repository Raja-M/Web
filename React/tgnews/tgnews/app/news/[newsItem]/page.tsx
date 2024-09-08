import { notFound } from "next/navigation"; 

export default function NewsItem( { params } : { params : { newsItem: string};}){

    if ( parseInt ( params.newsItem) > 1000){
        notFound();
    }
    return (
        <>
            <h1> News Item {params.newsItem}</h1>
            <p> News Details </p>
        </>
    )
}