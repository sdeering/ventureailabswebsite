"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, ImageIcon, FileText, BarChart3, ExternalLink, Sparkles } from "lucide-react"

export function AITools() {
  const tools = [
    {
      icon: MessageSquare,
      title: "AI Chatbot Builder",
      description: "Create intelligent chatbots for customer service, lead generation, and user engagement.",
      features: ["Natural Language Processing", "Multi-platform Integration", "Custom Training", "Analytics Dashboard"],
      status: "Coming Soon",
      link: "#",
    },
    {
      icon: FileText,
      title: "Content Generator",
      description: "Generate high-quality blog posts, social media content, and marketing copy at scale.",
      features: ["SEO Optimization", "Brand Voice Training", "Multiple Formats", "Plagiarism Check"],
      status: "Coming Soon",
      link: "#",
    },
    {
      icon: ImageIcon,
      title: "AI Image Creator",
      description: "Generate stunning visuals, logos, and marketing materials using advanced AI models.",
      features: ["Custom Styles", "Brand Guidelines", "High Resolution", "Commercial License"],
      status: "Coming Soon",
      link: "#",
    },
    {
      icon: BarChart3,
      title: "Analytics AI",
      description: "Transform your data into actionable insights with AI-powered analytics and reporting.",
      features: ["Predictive Analytics", "Custom Dashboards", "Real-time Insights", "Data Visualization"],
      status: "Coming Soon",
      link: "#",
    },
    {
      icon: Bot,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce costs.",
      features: ["Workflow Designer", "API Integrations", "Task Scheduling", "Performance Monitoring"],
      status: "Coming Soon",
      link: "#",
    },
    {
      icon: Sparkles,
      title: "AI Assistant",
      description: "Personal AI assistant for research, writing, and decision-making support.",
      features: ["Research Capabilities", "Document Analysis", "Task Management", "Learning Adaptation"],
      status: "Coming Soon",
      link: "#",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800"
      case "Beta":
        return "bg-yellow-100 text-yellow-800"
      case "Coming Soon":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="ai-tools" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful AI Tools for Every Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access our suite of cutting-edge AI tools designed to streamline your workflow, boost productivity, and
            drive innovation across your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                    {tool.status}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{tool.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  disabled={tool.status === "Coming Soon"}
                >
                  {tool.status === "Coming Soon" ? (
                    "Coming Soon"
                  ) : (
                    <>
                      {tool.status === "Beta" ? "Try Beta" : "Learn More"}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Workflow?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI tools to automate processes, generate content, and make
              data-driven decisions.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
