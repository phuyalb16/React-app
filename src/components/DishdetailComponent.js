import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg } from 'reactstrap';

class DishDetail extends Component{

	componentDidMount()
	{
		console.log("DishDetail Component componentDidMount is invoked");
	}

  componentDidUpdate()
  {
    console.log("DishDetail Component componentDidUpdate is invoked");
  }

  renderDish(dish)
  {
      return(
              <div className="col-12 col-md-5 m-1">
              <Card>
                  <CardImg top src={dish.image} alt={dish.name}/>
                  <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
              </div>


      );
  }
  renderComments(comments){
      if (comments != null)
        return(
          <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className="list-unstyled" >
              {comments.map((comment)=>{
                return(
                    <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--<em>{comment.author}, new </em></p>
                    </li>
                );
              })}
            </ul>
          </div>
        );
        else
          return(
            <div></div>
          );
        }

  render() {
    console.log("DishDetail Component render is invoked");
        if(this.props.dish != null)
            return(
                <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
                </div>
            );
        else
          return(
              <div></div>
            );

    }
}

export default DishDetail;
