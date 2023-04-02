import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField, Loader } from "../Components";
import { getRandomPrompt } from "../utils";

const CreatePost = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
const handleChange=()=>{
  
}
  return (<>
  <section className="create_post_container">
  <div>
          <h1>Create</h1>
          <p className="browser_collection">
            imaginative and visually stunning images
            created by Dall-E AI
          </p>
        </div>
        <FormField value={form.name}
        placeholder="Name"
        handleChange={handleChange}
        />
  </section>
  </>);
};

export default CreatePost;
