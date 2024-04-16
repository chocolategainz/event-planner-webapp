import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

{/*rsvp and guestbook email verification FORM*/}

const inviteForm = () => {
    return (
<div className = "invitationContainer">
    <h4>Which of the following will you be able to attend?</h4>
 <Form.Check name= 'groupOne' required inline label = "Both" type="radio" />
 <Form.Check name= 'groupOne' required inline label = "Ceremony" type="radio" />
 <Form.Check name= 'groupOne' required inline label = "Reception" type="radio" />
<p> 
<Button variant = "outline-primary">Next</Button>
</p> 
</div>
    )
}

export default inviteForm;