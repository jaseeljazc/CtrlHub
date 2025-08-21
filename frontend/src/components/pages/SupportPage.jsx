import React, { useState, useEffect } from 'react';
import { HeadphonesIcon, MailIcon, MessageCircleIcon, ClockIcon, CheckCircleIcon, ArrowRightIcon } from 'lucide-react';

const SupportPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: <MailIcon className="w-8 h-8" />,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      action: "support@company.com",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-400"
    },
    {
      icon: <MessageCircleIcon className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-400"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      action: "+1 (555) 123-4567",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-400"
    }
  ];

  const faqs = [
    {
      question: "How can I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email."
    },
    {
      question: "How do I update my billing information?",
      answer: "Navigate to Account Settings > Billing to update your payment methods and billing details. You can add, remove, or modify payment methods there."
    },
    {
      question: "What are your support hours?",
      answer: "Our support team is available Monday-Friday, 9 AM - 6 PM EST. For urgent issues outside these hours, please use our email support."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account dashboard under the Subscription section. Your access will continue until the end of your billing period."
    }
  ];

  const features = [
    {
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
      text: "24/7 Email Support"
    },
    {
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
      text: "Live Chat Available"
    },
    {
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
      text: "Comprehensive FAQ"
    },
    {
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
      text: "Video Tutorials"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-150"></div>
      </div>

      <div className={`relative z-10 container mx-auto px-4 py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 backdrop-blur-lg rounded-full mb-8  border border-green-500/30">
            <HeadphonesIcon className="w-10 h-10 text-green-400" />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Support Center
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our comprehensive support system is currently being enhanced to serve you better
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-green-500 text-black px-6 py-3 rounded-full font-bold text-lg animate-pulse">
            <ClockIcon className="w-5 h-5" />
            <span>Coming Soon</span>
          </div>
        </div>

        {/* <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-full p-1 border border-green-500/30">
            <div className="flex space-x-1">
              {['contact', 'faq'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-green-500 text-black shadow-lg shadow-green-500/30' 
                      : 'text-green-400 hover:bg-green-500/10'
                  }`}
                >
                  {tab === 'contact' ? 'Contact Options' : 'FAQ'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === 'contact' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 hover:border-green-500/50 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${method.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(method.icon, { className: "w-8 h-8 text-black" })}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {method.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {method.description}
                </p>
                
                <button className={`w-full ${method.color} ${method.hoverColor} text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center space-x-2`}>
                  <span>{method.action}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-500/20 hover:border-green-500/50 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left p-6 hover:bg-green-500/5 transition-colors duration-300 flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <ArrowRightIcon className="w-5 h-5 text-green-400 rotate-90" />
                    </div>
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 text-gray-300 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* <div className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-12 border border-green-500/20 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What's Coming
            </h2>
            <p className="text-gray-300 text-lg">
              Our new support center will include these amazing features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 hover:border-green-500/30 transition-colors duration-300"
              >
                {feature.icon}
                <span className="text-white font-medium text-lg">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Immediate Help?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            While we're building our new support center, you can still reach out to us
          </p>
          <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30">
            Contact Us Directly
          </button>
        </div> */}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SupportPage;