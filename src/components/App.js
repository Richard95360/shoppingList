import React, { Component } from 'react';
import Form from './Form';
import ItemList from './ItemList';
import { connect } from 'react-redux';




class App extends Component {


    render (){

        return (
        
                <div>
                    <h3>Liste des Courses</h3>
                    < Form formTitle="Ajouter des articles à acheter" addArticle={this.props.addArticle} />
                    <ItemList articles={this.props.articles} editArticle={this.props.editArticle}  removeArticle={this.props.removeArticle}  />
                </div>
               
        );
     }
 }

 const addArticleActionCreator = (article) =>{
     return {
         type: 'ADD_ARTICLE',
         payload:article
     }
 }

 

 const editArticleActionCreator = (article) => {
     return{
         type: 'EDIT_ARTICLE',
         payload:article
     }

 }

 const removeArticleActionCreator = (articleId) => {
    return {
        type: 'REMOVE_ARTICLE',
        payload: articleId
    }
}

 const mapStateToProps = (state) =>{
            return{

                articles: state.articles
            }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         addArticle : (article) => {
             dispatch(addArticleActionCreator(article));
         },
         removeArticle: (articleId) => {
            
            dispatch(removeArticleActionCreator(articleId));
           
        },
       
         editArticle: (article) => {
             dispatch(editArticleActionCreator(article));
         },
        
     }
 }

 

export default connect(mapStateToProps,mapDispatchToProps)(App);