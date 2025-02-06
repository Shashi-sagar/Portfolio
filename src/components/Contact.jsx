import { useState } from "react";

const FORM_TYPES = {
    CONTACT: "contact",
    FEEDBACK: "feedback"
};

const INITIAL_FORM_DATA = {
    name: "",
    email: "",
    message: "",
    rating: "",
    comments: "",
    _gotcha: ""
};

const Contact = () => {
    const [formType, setFormType] = useState(FORM_TYPES.CONTACT);
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (formType === FORM_TYPES.CONTACT && !formData.message.trim()) newErrors.message = "Message is required";
        if (formType === FORM_TYPES.FEEDBACK && !formData.rating) newErrors.rating = "Rating is required";
        if (formType === FORM_TYPES.FEEDBACK && !formData.comments.trim()) newErrors.comments = "Comments are required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus("");

        try {
            const response = await fetch("https://getform.io/f/amddzrmb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    form_type: formType,
                    submission_date: new Date().toISOString()
                })
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData(INITIAL_FORM_DATA);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div name="contact" className="flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-b from-black to-gray-900 px-4 py-10">
            <div className="pb-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-white border-b-4 border-gray-500 inline-block">
                    {formType === FORM_TYPES.CONTACT ? "Contact Us" : "Feedback"}
                </p>
                <p className="text-gray-400 mt-2">
                    {formType === FORM_TYPES.CONTACT ? "Submit the Form! #Solution Expert" : "I appreciate your Experienced feedback!"}
                </p>
            </div>
            <div className="flex space-x-4 pb-6">
                {Object.values(FORM_TYPES).map((type) => (
                    <button
                        key={type}
                        type="button"
                        className={`px-4 py-2 rounded-md transition duration-300 ${formType === type ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
                        onClick={() => setFormType(type)}
                    >
                        {type === FORM_TYPES.CONTACT ? "Contact" : "Feedback"}
                    </button>
                ))}
            </div>
            <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input type="text" name="_gotcha" style={{ display: "none" }} value={formData._gotcha} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                    
                    {[
                        { name: "name", placeholder: "Enter your Name", type: "text" },
                        { name: "email", placeholder: "Enter your Email", type: "email" }
                    ].map(({ name, placeholder, type }) => (
                        <div key={name}>
                            <input
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                className={`p-3 my-2 bg-gray-900 border-2 rounded-md text-white w-full focus:outline-none ${errors[name] ? "border-red-500" : "border-gray-600"}`}
                                value={formData[name]}
                                onChange={handleChange}
                            />
                            {errors[name] && <p className="text-red-400 text-sm">{errors[name]}</p>}
                        </div>
                    ))}
                    {formType === FORM_TYPES.CONTACT && (
                        <textarea name="message" rows={5} placeholder="Enter your Message" className={`p-3 my-2 bg-gray-900 border-2 rounded-md text-white w-full focus:outline-none ${errors.message ? "border-red-500" : "border-gray-600"}`} value={formData.message} onChange={handleChange}></textarea>
                    )}
                    {formType === FORM_TYPES.FEEDBACK && (
                        <>
                            <select name="rating" className={`p-3 my-2 bg-gray-900 border-2 rounded-md text-white w-full focus:outline-none ${errors.rating ? "border-red-500" : "border-gray-600"}`} value={formData.rating} onChange={handleChange}>
                                <option value="" disabled>Rate your experience</option>
                                {[
                                    { value: "poor", label: "😠 Poor" },
                                    { value: "average", label: "😐 Average" },
                                    { value: "good", label: "🙂 Good" },
                                    { value: "very_good", label: "😊 Very Good" },
                                    { value: "excellent", label: "🤩 Excellent" }
                                ].map(({ value, label }) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </select>
                            <textarea name="comments" rows={5} placeholder="Enter your Comments" className={`p-3 my-2 bg-gray-900 border-2 rounded-md text-white w-full focus:outline-none ${errors.comments ? "border-red-500" : "border-gray-600"}`} value={formData.comments} onChange={handleChange}></textarea>
                        </>
                    )}
                    <button type="submit" disabled={isSubmitting} className={`my-4 text-white px-6 py-3 mx-auto flex items-center justify-center rounded-md transition duration-300 w-full ${isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"}`}>
                        {isSubmitting ? "Submitting..." : formType === FORM_TYPES.CONTACT ? "Let's Talk" : "Submit Feedback"}
                    </button>

                    {/* Success/Error Message */}
                    {submitStatus && (
                        <p className={`text-center mt-4 text-lg font-semibold ${submitStatus === "success" ? "text-green-400" : "text-red-400"}`}>
                            {submitStatus === "success" 
                                ? "Thank you! Your form has been submitted successfully." 
                                : "Oops! Something went wrong. Please try again."}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
