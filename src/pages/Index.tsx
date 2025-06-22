import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, PenTool, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// CSS-based Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-cyan-50" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        {/* Purple orb */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)',
            left: '-10%',
            top: '20%',
            animation: 'float1 20s ease-in-out infinite'
          }}
        />
        
        {/* Cyan orb */}
        <div 
          className="absolute w-80 h-80 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 70%)',
            right: '-5%',
            top: '10%',
            animation: 'float2 25s ease-in-out infinite'
          }}
        />
        
        {/* Yellow orb */}
        <div 
          className="absolute w-72 h-72 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(245, 158, 11, 0.1) 40%, transparent 70%)',
            left: '20%',
            bottom: '10%',
            animation: 'float3 30s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle${(i % 3) + 1} ${15 + Math.random() * 10}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, -10px) scale(1.05); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 25px) scale(1.1); }
          66% { transform: translate(25px, -30px) scale(0.95); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(15px, -25px) scale(1.05); }
          40% { transform: translate(-25px, 15px) scale(0.9); }
          60% { transform: translate(30px, 10px) scale(1.1); }
          80% { transform: translate(-15px, -20px) scale(0.95); }
        }
        
        @keyframes particle1 {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-10vh) translateX(50px); opacity: 0; }
        }
        
        @keyframes particle2 {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          15% { opacity: 0.4; }
          85% { opacity: 0.4; }
          100% { transform: translateY(-10vh) translateX(-30px); opacity: 0; }
        }
        
        @keyframes particle3 {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          20% { opacity: 0.2; }
          80% { opacity: 0.2; }
          100% { transform: translateY(-10vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Loading Component
const LoadingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="flex flex-col items-center justify-center p-8 space-y-4"
  >
    <div className="relative">
      <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-200"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </div>
    <div className="text-center space-y-2">
      <h3 className="text-lg font-semibold text-gray-900">Crafting your blog post...</h3>
      <p className="text-sm text-gray-600">Our AI is working its magic ✨</p>
    </div>
  </motion.div>
);

// Blog Post Display Component
const BlogPostDisplay = ({ content }: { content: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-4xl mx-auto"
  >
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="border-b bg-gradient-to-r from-purple-50 to-cyan-50">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <CardTitle className="text-xl">Generated Blog Post</CardTitle>
        </div>
        <CardDescription>Your AI-powered content is ready!</CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-purple-600 prose-strong:text-gray-900">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Main BlogAgent Component
const Index = () => {
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState('');
  const [loading, setLoading] = useState(false);
  const [blogContent, setBlogContent] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();

  const generateBlog = async () => {
    if (!title.trim()) {
      toast({
        title: "Title Required",
        description: "Please enter a blog post title to get started.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setError('');
    setBlogContent('');

    try {
      // Simulated API call - replace with actual Flask backend endpoint
      const response = await fetch('/api/generate_blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),
          keywords: keywords.trim(),
          tone: tone || 'neutral',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setBlogContent(data.blog_content || data.content);
      toast({
        title: "Blog Generated! 🎉",
        description: "Your AI-powered blog post is ready.",
      });
    } catch (err) {
      // For demo purposes, we'll generate mock content
      console.log('API not available, generating demo content...');
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockContent = `# ${title}

${keywords ? `*Keywords: ${keywords}*` : ''}
${tone ? `*Tone: ${tone.charAt(0).toUpperCase() + tone.slice(1)}*` : ''}

## Introduction

Welcome to this comprehensive guide about **${title}**. In today's digital landscape, understanding this topic is crucial for success.

## Key Points

1. **First Important Aspect**: This section covers the fundamental concepts you need to know.

2. **Implementation Strategy**: Here's how you can apply these concepts in real-world scenarios.

3. **Best Practices**: Follow these guidelines to achieve optimal results.

## Benefits

- Enhanced understanding of the subject matter
- Practical applications for immediate use
- Long-term value for your projects

## Conclusion

${title} is an essential topic that deserves careful consideration. By following the guidelines outlined in this post, you'll be well-equipped to tackle any challenges that come your way.

---

*Generated by BlogAgent AI - Your intelligent content creation companion*`;

      setBlogContent(mockContent);
      toast({
        title: "Demo Blog Generated! 🎉",
        description: "This is a demo version. Connect to your Flask backend for real AI generation.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      generateBlog();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-purple-600" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              BlogAgent
            </h1>
            <PenTool className="w-8 h-8 text-cyan-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your ideas into engaging blog posts with the power of AI
          </p>
          <div className="flex items-center justify-center space-x-4 -4">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered
            </Badge>mt
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-700">
              Fast Generation
            </Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-700">
              Professional Quality
            </Badge>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-cyan-50 border-b">
                <CardTitle className="flex items-center space-x-2">
                  <PenTool className="w-5 h-5" />
                  <span>Create Your Blog Post</span>
                </CardTitle>
                <CardDescription>
                  Fill in the details below and let AI craft your perfect blog post
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Blog Title *
                  </label>
                  <Input
                    placeholder="Enter your blog post title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="text-lg h-12 border-2 focus:border-purple-400 focus:ring-purple-200"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Keywords (optional)
                    </label>
                    <Textarea
                      placeholder="Enter keywords separated by commas..."
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      className="resize-none h-24 border-2 focus:border-purple-400 focus:ring-purple-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Tone (optional)
                    </label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger className="h-12 border-2 focus:border-purple-400 focus:ring-purple-200">
                        <SelectValue placeholder="Select writing tone..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="neutral">Neutral</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                        <SelectItem value="authoritative">Authoritative</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={generateBlog}
                    disabled={loading || !title.trim()}
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Generating Blog Post...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Generate Blog Post
                      </>
                    )}
                  </Button>
                </motion.div>

                <p className="text-xs text-gray-500 text-center">
                  Tip: Press Ctrl+Enter to quickly generate your blog post
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Loading State */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                  <LoadingIndicator />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Display */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card className="shadow-xl border-0 bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 text-red-800">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <p className="font-medium">Error generating blog post</p>
                    </div>
                    <p className="text-red-600 mt-2">{error}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Blog Content Display */}
          <AnimatePresence>
            {blogContent && !loading && (
              <BlogPostDisplay content={blogContent} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Index;
