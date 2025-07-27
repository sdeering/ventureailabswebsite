import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Rocket, Search, Share2, Brain, Target, TrendingUp } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "AI Automation Services",
      description:
        "Streamline your business processes with intelligent automation solutions that reduce costs and increase efficiency.",
      features: ["Process Automation", "Workflow Optimization", "Custom AI Models", "Integration Support"],
    },
    {
      icon: Rocket,
      title: "AI Startup Solutions",
      description:
        "Launch your AI-powered startup with our comprehensive suite of tools, guidance, and technical expertise.",
      features: ["MVP Development", "AI Strategy", "Technical Consulting", "Scaling Solutions"],
    },
    {
      icon: Search,
      title: "AI SEO & LLM Services",
      description: "Boost your online presence with AI-driven SEO strategies and large language model implementations.",
      features: ["Content Optimization", "Keyword Research", "LLM Integration", "Performance Analytics"],
    },
    {
      icon: Share2,
      title: "AI Social Media Content",
      description: "Generate engaging, brand-consistent social media content at scale using advanced AI technologies.",
      features: ["Content Generation", "Brand Voice Training", "Multi-Platform Support", "Performance Tracking"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From automation to content generation, we provide end-to-end AI services that transform how your business
            operates and grows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Advanced AI Models</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Cutting-edge machine learning and deep learning solutions tailored to your needs.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Precision Targeting</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Data-driven insights and targeting strategies that deliver measurable results.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Scalable Growth</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Solutions that grow with your business and adapt to changing market demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
