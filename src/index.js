import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ComentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <ComentDetail 
                author="Ajay" 
                timeAgo="Today at 11:00 AM" 
                imgSourse={faker.image.avatar()} 
                commentConetet="Bhot Keda!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <ComentDetail 
                 author="Nitin" 
                 timeAgo="Yesterday at 9:00 AM" 
                 imgSourse={faker.image.avatar()} 
                 commentConetet="Ram Mandir!"
                />
            </ApprovalCard>
            <ApprovalCard>
            <ComentDetail 
                author="Rahul" 
                timeAgo="Yesterday at 10:00 AM" 
                imgSourse={faker.image.avatar()} 
                commentConetet="Vahi Bnega!"
                />
            </ApprovalCard>
            <ApprovalCard>
            <ComentDetail 
                author="Risabh" 
                timeAgo="Today at 12:00 AM" 
                imgSourse={faker.image.avatar()}
                commentConetet="Jai Modi!"
                />
            </ApprovalCard>
            
            
        </div>
    );
}

ReactDOM.render(<App />,document.querySelector('#root'));