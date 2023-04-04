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
const handleSurpriseMe=()=>{
  
}
  return (<>
  <section className="create_post_container">
  <div>
          <h1>Create</h1>
          <p className="browser_collection">
            imaginative stunning images
            created by Dall-E AI.
          </p>
        </div>
        <FormField value={form.name}
        placeholder="What do you do with this newfound ability"
        handleChange={handleChange}
        type='text'
        isSurprise
        handleSurpriseMe={handleSurpriseMe}
        />
  </section>
  </>);
};

export default CreatePost;
