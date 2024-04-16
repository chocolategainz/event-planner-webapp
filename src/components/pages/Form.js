import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

{/*rsvp and guestbook email verification FORM*/}

const inviteForm = () => {
    return (
<div className = "invitation">
    <h4>Which of the following will you be able to attend?</h4>
 <Form.Check name= 'grouped' required inline label = "Both" type="radio" />
 <Form.Check name= 'grouped' required inline label = "Ceremony" type="radio" />
 <Form.Check name= 'grouped' required inline label = "Reception" type="radio" />
<p> 
    <b> 
<Button variant = "outline-primary">Next</Button>
    </b>
</p>
</div>



    )
}

export default inviteForm;