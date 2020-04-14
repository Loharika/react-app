/*global ReactDOM*/
const textEl=document.getElementById('textEl');
const images=document.getElementById('images');
const alerts=document.getElementById('alerts');
function Strikethrough(props){
    return props.text;
}
let textElement=<h2 className='text'><Strikethrough text="ReactJS not widely used"/></h2>;
ReactDOM.render(textElement,textEl);


function StandardImageView(props){
        return (<img src={props.imgUrl} alt={props.imgAlt} className='standard-image'/>);
}
function RoundedCornersImageView(props){
    return (
        <img src={props.imgUrl} alt={props.imgAlt} className='rounded-image'/>
        );
}
function CircularImageView(props){
    return (
        <img src={props.imgUrl} alt={props.imgAlt} className='circular-image'/>
        );
}

function ImageViews(props){
    return (
        <div>
        <div className='standard-image-container'><StandardImageView imgUrl={props.imgUrl} imgAlt={props.imgAlt}/></div>
        <div className='rounded-image-container' ><RoundedCornersImageView imgUrl={props.imgUrl} imgAlt={props.imgAlt}/></div>
        <div className='circular-image-container'><CircularImageView imgUrl={props.imgUrl} imgAlt={props.imgAlt}/></div>
        </div>
        );
}
let imageElements=<ImageViews imgUrl='assets/koru-sprial-shape.jpg' imgAlt='image'/>;
ReactDOM.render(imageElements,images);
function SuccessMessage(props){
    return (
        <div className='success-message'>Success Message</div>
        );
}
function WarningMessage(props){
    return (
        <div className='warning-message'>Warning Message</div>
        );
}
function InfoMessage(props){
    return (
        <div className='info-message'>Info Message</div>
        );
}
function ErrorMessage(props){
    return (
        <div className='error-message'>Warning Message</div>
        );
}
function AlertMessage(props){
    let eachMessageType=props.messageType;
    switch(eachMessageType){
        case 'SuccessMessage':{
            return (
                <SuccessMessage messageType={props.messageText}/>
                );
        }
        case 'WarningMessage':{
            return (
                <WarningMessage messageType={props.messageText}/>
                );
        }
        case 'InfoMessage':{
            return (
                <InfoMessage messageType={props.messageText}/>
                );
        }
        case 'ErrorMessage':{
            return (
                <ErrorMessage messageType={props.messageText}/>
                );
        }
    }
    
}
//let alert=<AlertMessage messageType='SuccessMessage' messageText='Success Message'/>
let alert=<AlertMessage messageType='WarningMessage' messageText='Warning Message'/>
//let alert=<AlertMessage messageType='InfoMessage' messageText='Info Message'/>
//let alert=<AlertMessage messageType='ErrorMessage' messageText='Error Message'/>
ReactDOM.render(alert,alerts);