export default function StatsSection() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-gray-50 rounded-lg">
            <span className="block text-4xl font-bold text-gray-900 mb-2">15+</span>
            <span className="text-gray-600">Research Projects</span>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <span className="block text-4xl font-bold text-gray-900 mb-2">28</span>
            <span className="text-gray-600">Publications</span>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <span className="block text-4xl font-bold text-gray-900 mb-2">8</span>
            <span className="text-gray-600">Years Experience</span>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <span className="block text-4xl font-bold text-gray-900 mb-2">12</span>
            <span className="text-gray-600">Collaborations</span>
          </div>
        </div>
      </div>
    </section>
  )
}
