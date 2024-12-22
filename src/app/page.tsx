'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowDownIcon, DevicePhoneMobileIcon, ClipboardDocumentIcon, PhotoIcon, CodeBracketIcon, CommandLineIcon, WindowIcon } from '@heroicons/react/24/outline';

type TabId = 'home' | 'features' | 'pulseConnect' | 'team';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3
  };

  const tabContent = {
    home: (
      <motion.div
        key="home"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6 title-split">
            <span className="title-pulse">Pulse</span>
            <span className="title-os">OS</span>
          </h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A fresh take on Linux that just works. Great looks, smooth performance, 
            and rock-solid reliability - all in one beautiful package.
          </motion.p>
        </div>

        <div className="glass-card aqua-gradient p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: WindowIcon,
                title: "Looks Amazing",
                desc: "Clean, modern look that's easy on the eyes and a joy to use every day"
              },
              {
                icon: CommandLineIcon,
                title: "Fast & Smooth",
                desc: "Quick and responsive, without getting in your way"
              },
              {
                icon: CodeBracketIcon,
                title: "Rock Solid",
                desc: "Built to keep you going, day in and day out"
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="glass-card feature-card p-6 text-center"
              >
                <feature.icon className="h-12 w-12 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card aqua-glow p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to try it out?</h2>
          <p className="text-lg mb-2">
            Beta coming in early 2025
          </p>
          <p className="text-gray-300">
            Get ready to experience Linux in a whole new way
          </p>
        </div>
      </motion.div>
    ),
    features: (
      <motion.div
        key="features"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card aqua-gradient p-8">
          <h2 className="text-3xl font-bold mb-6">What's Cool About PulseOS?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">The Basics</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  <span>Easy to use desktop</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  <span>Sed do eiusmod tempor incididunt</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">The Good Stuff</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  <span>Sleek aquamorphic look</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  <span>Awesome wallpapers built-in</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  <span>Smooth animations everywhere</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  <span>Make it yours easily</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    ),
    pulseConnect: (
      <motion.div
        key="pulseConnect"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card aqua-gradient p-8">
          <h2 className="text-3xl font-bold mb-6">PulseConnect</h2>
          <p className="text-lg mb-8">
            Your phone and PulseOS, working together like magic. 
            Hook up your Android device and watch everything just click.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card feature-card p-6">
              <div className="flex flex-col items-center">
                <DevicePhoneMobileIcon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Share Files</h3>
                <p className="text-center">
                  Move stuff between devices with zero hassle
                </p>
              </div>
            </div>
            <div className="glass-card feature-card p-6">
              <div className="flex flex-col items-center">
                <ClipboardDocumentIcon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Shared Clipboard</h3>
                <p className="text-center">
                  Copy here, paste there - easy as that
                </p>
              </div>
            </div>
            <div className="glass-card feature-card p-6">
              <div className="flex flex-col items-center">
                <PhotoIcon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Phone Camera</h3>
                <p className="text-center">
                  Turn your phone into a webcam or scanner in seconds
                </p>
              </div>
            </div>
            <div className="glass-card feature-card p-6">
              <div className="flex flex-col items-center">
                <DevicePhoneMobileIcon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Screen Share</h3>
                <p className="text-center">
                  See your phone screen on your PC, no lag
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://github.com/placeholderrrr"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card github-button aqua-glow inline-block px-8 py-4 text-lg"
            >
              Check it out on GitHub
            </a>
          </div>
        </div>
      </motion.div>
    ),
    team: (
      <motion.div
        key="team"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card aqua-gradient p-8">
          <h2 className="text-3xl font-bold mb-6">The Team</h2>
          <p className="text-lg mb-8">
            Meet the folks making PulseOS happen
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-cyan-400/20 mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Spitkov</h3>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-cyan-400">PulseConnect Developer</p>
                  <p className="text-cyan-400">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    ),
  };

  return (
    <main className="min-h-screen p-8 md:p-24 overflow-hidden relative">
      {/* Navigation Tabs */}
      <div className="flex justify-center mb-12">
        <nav className="glass-card p-1 inline-flex space-x-1">
          {[
            { id: 'home' as TabId, label: 'Home' },
            { id: 'features' as TabId, label: 'Features' },
            { id: 'pulseConnect' as TabId, label: 'PulseConnect' },
            { id: 'team' as TabId, label: 'Team' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg nav-button ${
                activeTab === tab.id
                  ? 'bg-cyan-400/20 text-cyan-400'
                  : 'hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {tabContent[activeTab]}
      </motion.div>
    </main>
  );
}
