import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p># Prioritizing Mental Health and Wellness with Healthify™

        In today's fast-paced world, mental health and wellness are more critical than ever. At Healthify™, we believe that a healthy mind is the foundation of a healthy life. Mental wellness isn't just the absence of mental illness; it encompasses emotional, psychological, and social well-being, affecting how we think, feel, and act in our daily lives. This blog aims to provide key insights and practical tips to enhance your mental health journey.
        
        ## Understanding Mental Health
        
        Mental health includes our emotional, psychological, and social well-being. It influences how we handle stress, relate to others, and make decisions. Mental health issues can arise from biological factors like genetics and brain chemistry, life experiences such as trauma or abuse, and family history of mental health problems. Recognizing the signs early, such as prolonged sadness, extreme mood changes, or social withdrawal, can make a significant difference in managing one's well-being.
        
        ## Practical Tips for Mental Wellness
        
        1. **Practice Mindfulness**: Mindfulness involves staying present and fully engaging with whatever we're doing at the moment. It can help reduce stress and improve emotional regulation.
        
        2. **Regular Physical Activity**: Exercise isn't just for the body; it's vital for the mind too. Regular physical activity can help alleviate anxiety and depression and boost mood.
        
        3. **Healthy Eating**: A balanced diet rich in nutrients can positively affect your mental health. Foods high in omega-3 fatty acids, like salmon and walnuts, have been linked to lower levels of depression.
        
        4. **Adequate Sleep**: Quality sleep is crucial for mental health. Poor sleep can exacerbate mental health issues, while good sleep hygiene can improve overall mood and energy levels.
        
        5. **Connect with Others**: Building strong, healthy relationships can provide emotional support and increase resilience against mental health challenges.
        
        6. **Seek Professional Help**: If you or someone you know is struggling, don't hesitate to seek professional help. Therapists and counselors can provide valuable support and strategies for managing mental health conditions.
        
        ## The Role of Healthify™ in Your Mental Wellness Journey
        
        At Healthify™, we offer comprehensive tools and resources to support your mental health journey. From guided meditations and stress management techniques to tracking your mental well-being, our platform is designed to empower you with knowledge and support. We believe that mental health is an essential part of overall health, and we are committed to helping you achieve a balanced and fulfilling life.
        
        ### Conclusion
        
        Investing in your mental health is not a luxury; it's a necessity. By taking proactive steps towards maintaining and improving your mental well-being, you set the foundation for a healthier and happier life. At Healthify™, we are here to support you every step of the way.
        
        For more tips and resources on mental health and wellness, explore our app and start your journey to a healthier mind today. Remember, your mental health matters!
        
        *Healthify™—Your Partner in Mental Wellness*</p>
      )}
    </div>
  );
};

export default Blog;
