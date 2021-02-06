import React from "react";
import Article from './Article';

const ItemList = (props) => {
    return (
        <div>

            <h3>votre Liste de courses</h3>
            <div>
                {
                    props.articles.map(article => <Article key={article.id} article={article}  removeArticle={props.removeArticle} editArticle={props.editArticle}/>)
                }
            </div>

            </div>

    );

}; 


export default ItemList;