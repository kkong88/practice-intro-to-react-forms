import { useState } from "react";

function ContactUs(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [staff, setStaff] = useState("");
  const [comments, setComments] = useState("");
  const [phoneType, setPhoneType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const contactUsInformation = {
      name,
      email,
      phone,
      staff,
      comments,
      phoneType,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
    setName("");
    setEmail("");
    setPhone("");
    setStaff("");
    setComments("");
    setPhoneType("");
  };

  const handleChange = () => {
    setStaff(!staff);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Instructor"
              checked={staff === "Instructor"}
              onChange={handleChange}
            />
            Instructor
          </label>
          <label>
            <input
              id="staff"
              type="radio"
              checked={staff}
              onChange={(e) => setStaff(e.target.value)}
              value={staff === "student"}
            />{" "}
            Student
          </label>
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
