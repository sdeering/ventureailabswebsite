import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Award, Clock } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                <Users className="w-4 h-4 mr-2" />
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Leading AI Innovation in Australia
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                VENTURE AI LABS is at the forefront of artificial intelligence innovation, helping businesses across
                Australia harness the power of AI to transform their operations, enhance customer experiences, and drive
                sustainable growth.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team of AI experts, data scientists, and business strategists work collaboratively to deliver
                solutions that are not just technologically advanced, but also practical and results-driven.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Brisbane Based</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Queensland expertise, global reach</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Expert Team</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">AI specialists & strategists</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6">
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Rapid Implementation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get your AI solutions up and running quickly with our streamlined development and deployment
                      processes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white dark:bg-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dedicated Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our team provides ongoing support and optimization to ensure your AI solutions continue to deliver
                      value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white dark:bg-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Proven Results</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Track record of successful AI implementations that drive measurable business outcomes and ROI.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
