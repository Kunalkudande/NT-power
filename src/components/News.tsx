
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calendar } from 'lucide-react';

const newsItems = [
  {
    date: 'April 9, 2025',
    title: 'DALY Qiqiang: Leading the Future of Truck Battery Systems for Start-Stop and Parking',
    snippet: 'Our latest innovation in truck battery systems is setting new standards in the industry with exceptional reliability and performance.',
    image: '/placeholder.svg'
  },
  {
    date: 'April 6, 2025',
    title: 'Battery Management Trends: What\'s Next in BMS Technology',
    snippet: 'Explore the upcoming trends in battery management systems and how DALY is positioned at the forefront of these innovations.',
    image: '/placeholder.svg'
  },
  {
    date: 'April 3, 2025',
    title: 'Smart BMS Systems: Boosting Battery Safety and Efficiency with Daly',
    snippet: 'Learn how our smart BMS systems are enhancing battery safety and efficiency across various industrial applications.',
    image: '/placeholder.svg'
  },
];

const News = () => {
  return (
    <section id="news" className="section-padding bg-gradient-to-b from-white to-white">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block text-daly-blue font-semibold text-sm mb-3">LATEST UPDATES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-daly-black">
            Media & <span className="text-daly-blue">News</span>
          </h2>
          <p className="text-daly-medium-gray max-w-2xl mx-auto">
            Stay updated with the latest developments, innovations, and industry news from DALY BMS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-daly-medium-gray/20 rounded-xl overflow-hidden card-hover"
            >
              <div className="h-48 bg-daly-medium-gray/10 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-sm text-daly-medium-gray">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 line-clamp-2 text-daly-black">{item.title}</h3>
                <p className="text-daly-medium-gray mb-6 line-clamp-3">{item.snippet}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-daly-blue hover:underline"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-daly-medium-gray/30 hover:bg-daly-medium-gray/10">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
