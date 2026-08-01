
export type Resource = {
  key: number;
  title: string;
  url: string;
  description: string;
};
 
export type Category = {
  key: number;
  categoryTitle: string;
  resources: Resource[];
};
 
export type Book = {
  key: number;
  title: string;
  author: string;
  description: string;
  url?: string; // optional — most of these are print-only
};
 
export const categories: Category[] = [  
{
    key: 22,
    categoryTitle: "General Knowledge",
    resources: [
      {
        key: 1,
        title: "RF Cafe",
        url: "https://www.rfcafe.com/index.htm",
        description:
          "Electronics, RF, mathematics, mechanics, and physics, plus articles on all sorts of things.",
      },
      {
        key: 2,
        title: "Analog Devices StudentZone",
        url: "https://www.analog.com/en/resources/analog-dialogue/studentzone/studentzone-october-2016.html",
        description:
          "A map of what can be learned on the Analog Devices site, including resources and project ideas for analog circuits.",
      },
      {
        key: 3,
        title: "Brian Douglas — Control Systems Videos",
        url: "https://engineeringmedia.com/videos",
        description: "Very helpful visuals and videos across a range of control systems topics.",
      },
    ],
  },  
  {
    key: 21,
    categoryTitle: "Tools",
    resources: [
      {
        key: 2,
        title: "openalternative.co",
        url: "https://openalternative.co/",
        description: "Open-source web apps comparable to their paid counterparts.",
      },
      {
        key: 3,
        title: "draw.io",
        url: "https://www.drawio.com/",
        description:
          "Open-source diagramming app, similar to LucidChart but free and login-free. Saves directly to the desktop.",
      },
    ],
  },
  {
    key: 1,
    categoryTitle: "MATLAB",
    resources: [
      {
        key: 1,
        title: "Matched Filter Example",
        url: "https://radix2tech.com/the-matched-filter-a-quick-analysis-and-example/",
        description:
          "Covers matched filtering and windowing, with MATLAB code and precise explanation.",
      },
      {
        key: 2,
        title: "Run Python in MATLAB Tutorial",
        url: "https://algorithmminds.com/matlab-tutorials/python-in-matlab-a-beginners-guide/",
        description:
          "The basics of running Python inside MATLAB. Could be very useful later.",
      },
      {
        key: 8,
        title: "Advanced Plotting and Function Techniques",
        url: "https://www.cs.ubc.ca/~murphyk/Software/matlabTutorial/html/plottingAdvanced.html",
        description:
          "Old but useful: surfaces, contours, in-plot annotations, and LaTeX equations. Also covers defining functions. Valuable for meshing functions of two variables.",
      },
      {
        key: 12,
        title: "Types of MATLAB Plots",
        url: "https://www.mathworks.com/help/matlab/creating_plots/types-of-matlab-plots.html",
        description:
          "Every plot type included in a standard license — including free versions of geoscatter and geoplot.",
      },
    ],
  },
  {
    key: 2,
    categoryTitle: "Link Budget",
    resources: [
      {
        key: 1,
        title: "3-Node Link Budget Presentation",
        url: "https://atlantarf.com/uploads/1/4/3/4/143448818/link_budget_-_getting_started.pdf",
        description:
          "Detailed link budget analysis for 3-node links, which also lays out the basics of 2-node links.",
      },
    ],
  },
  {
    key: 3,
    categoryTitle: "TDOA",
    resources: [
      {
        key: 1,
        title: "TDOA Multilateration Blog Post",
        url: "https://lo.calho.st/posts/tdoa-multilateration/",
        description: "Worked example with a Python script for a simple TDOA method.",
      },
      {
        key: 2,
        title: "TOA White Paper with Good Explanation",
        url: "https://filedb.experts-exchange.com/incoming/2009/03_w13/121472/toa.pdf",
        description: "Includes some incomplete MATLAB to practice with.",
      },
      {
        key: 3,
        title: "TDOA SDR Project",
        url: "https://adrianboyko.com/posts/tdoa/tdoa1/",
        description: "SDR project that plots hyperbolas on the earth.",
      },
      {
        key: 4,
        title: "Correlation for TDOA",
        url: "https://panoradio-sdr.de/correlation-for-time-delay-analysis/",
        description:
          "Covers the trade-offs between correlation methods, with functions, examples, and visuals.",
      },
    ],
  },
  {
    key: 4,
    categoryTitle: "TDOA/FDOA",
    resources: [
      {
        key: 1,
        title: "High-Precision Joint TDOA and FDOA Location System",
        url: "https://www.mdpi.com/2072-4292/16/4/693",
        description:
          "Academic paper on joint TDOA/FDOA, including methods to speed up the CAF. Good explanation of implementation from the signal level and localization via Newton's method.",
      },
    ],
  },
  {
    key: 5,
    categoryTitle: "Direction Finding",
    resources: [
      {
        key: 1,
        title: "Rohde & Schwarz — Intro to DF Methodology",
        url: "https://cdn.rohde-schwarz.com/am/us/campaigns_2/a_d/Intro-to-direction-finding-methodologies.pdf",
        description:
          "Multiple DF approaches: amplitude-based, Doppler shift-based, and correlative interferometry (phase-based).",
      },
      {
        key: 2,
        title: "CRFS — AoA and DF Methods",
        url: "https://pages.crfs.com/hubfs/whitepapers/Angle%20of%20Arrival-Direction%20Finding.pdf",
        description: "Angle of arrival and direction finding, including the equations.",
      },
      {
        key: 3,
        title: "Iterative Algorithm for 3D Localization from a DF Network",
        url: "https://web.engr.oregonstate.edu/~hliu/papers/Zou_TVT_2023.pdf",
        description:
          "A fairly simple algorithm that looks implementable. Want to try it soon.",
      },
    ],
  },
  {
    key: 6,
    categoryTitle: "Satellites",
    resources: [
      {
        key: 2,
        title: "Satellite Tracker (with visual)",
        url: "https://satellitetracker3d.com/",
        description: "Satellite tracker with high-definition visuals.",
      },
      {
        key: 3,
        title: "Space-Track.org",
        url: "https://www.space-track.org/",
        description: "Good for finding TLE files by name or ID.",
      },
    ],
  },
  {
    key: 7,
    categoryTitle: "GPS/GNSS",
    resources: [
      {
        key: 1,
        title: "GPS and GNSS for Geospatial Professionals (Penn State)",
        url: "https://www.e-education.psu.edu/geog862/",
        description:
          "Penn State course covering GPS and GNSS signals and the parameters involved in satellite geometry.",
      },
    ],
  },
  {
    key: 8,
    categoryTitle: "Phased Arrays",
    resources: [
      {
        key: 1,
        title: "Sidelobes and Tapering",
        url: "https://www.analog.com/en/resources/analog-dialogue/articles/phased-array-antenna-patterns-part3.html",
        description:
          "Explains how tapering the power of a phased array relates to the Fourier transform between a square wave and a sinc. Also covers mutual coupling and quantization.",
      },
      {
        key: 2,
        title: "Phased Array Antenna Patterns: 3-Part Series",
        url: "https://www.analog.com/en/resources/analog-dialogue/articles/phased-array-antenna-patterns-part1.html",
        description:
          "Works through the equations for ULAs — array factor, element factor, gain — plus sidelobes, grating lobes, and beam squint.",
      },
    ],
  },
  {
    key: 9,
    categoryTitle: "Antennas",
    resources: [
      {
        key: 1,
        title: "Antenna-Theory.com",
        url: "https://www.antenna-theory.com/",
        description: "Antennas, signal transmission, phased arrays, and more.",
      },
    ],
  },
  {
    key: 10,
    categoryTitle: "Receiver Architecture",
    resources: [
      {
        key: 1,
        title: "Direct-Conversion, Zero-IF Receiver",
        url: "https://wirelesspi.com/direct-conversion-zero-if-receiver/",
        description: "Focuses on the advantages and drawbacks of a zero-IF architecture.",
      },
      {
        key: 2,
        title: "In-Depth Zero-IF Receiver Design Tutorial",
        url: "https://next.gr/tutorials/rf-and-wireless-basics/zero-if-receiver-design-tutorial",
        description: "More in-depth, with plenty of equations useful for modeling.",
      },
    ],
  },
  {
    key: 11,
    categoryTitle: "Waveforms",
    resources: [
      {
        key: 2,
        title: "Chirp / LFM (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Chirp",
        description: "Good baseline for the equations behind chirp waveforms.",
      },
    ],
  },
  {
    key: 12,
    categoryTitle: "Radar",
    resources: [
      {
        key: 1,
        title: "Radar Tutorial Basics",
        url: "https://www.radartutorial.eu/01.basics/!rb02.en.html",
        description: "Very good resource covering all the basics.",
      },
      {
        key: 2,
        title: "MIT Intro to Radar Lectures",
        url: "https://www.ll.mit.edu/outreach/web-based-course-radar-introduction-radar-systems",
        description: "Lincoln Labs course. Watched these my first year — worth revisiting.",
      },
      {
        key: 3,
        title: "MATLAB Radar Equation Doc",
        url: "https://www.mathworks.com/help/radar/ug/radar-equation.html",
        description: "Goes over the simple radar equation and SNR equations.",
      },
      {
        key: 4,
        title: "Radar Signal Characteristics (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Radar_signal_characteristics",
        description:
          "Pulsed radar parameters, range and velocity ambiguity, and clutter and interference reduction.",
      },
      {
        key: 5,
        title: "Naval Postgraduate School Radar Fundamentals",
        url: "https://faculty.nps.edu/jenn/Seminars/RadarFundamentals.pdf",
        description: "Great resource for radar fundamentals.",
      },
    ],
  },
  {
    key: 13,
    categoryTitle: "Signal Processing",
    resources: [
      {
        key: 1,
        title: "FFT Bin Calculation",
        url: "https://sqlpey.com/c%23/fft-bin-frequency-calculation/",
        description: "How to calculate the frequency represented by a specific FFT bin.",
      },
      {
        key: 2,
        title: "MIT Digital Signal Processing Course",
        url: "https://ocw.mit.edu/courses/res-6-008-digital-signal-processing-spring-2011/",
        description: "Lecture videos, notes, and problem sets.",
      },
      {
        key: 3,
        title: "Matched Filter Example",
        url: "https://radix2tech.com/the-matched-filter-a-quick-analysis-and-example/",
        description:
          "Covers matched filtering and windowing, with MATLAB code and precise explanation.",
      },
      {
        key: 4,
        title: "scikit-dsp-comm Documentation",
        url: "https://scikit-dsp-comm.readthedocs.io/en/stable/index.html",
        description:
          "DSP documentation for Python — useful on its own, and especially for running Python through MATLAB.",
      },
      {
        key: 5,
        title: "The Scientist & Engineer's Guide to DSP",
        url: "https://www.analog.com/en/resources/technical-books/scientist_engineers_guide.html",
        description: "Full textbook, free on the Analog Devices website.",
      },
      {
        key: 6,
        title: "PySDR: A Guide to SDR and DSP Using Python",
        url: "https://pysdr.org/content/intro.html",
        description: "Tutorial and course in one, with code and lessons. Very good basics.",
      },
    ],
  },
  {
    key: 14,
    categoryTitle: "I/Q Data",
    resources: [
      {
        key: 1,
        title: "I/Q Explanation for DSP",
        url: "https://www.dsprelated.com/showarticle/192.php",
        description: "Excellent article on I/Q data and complex numbers.",
      },
    ],
  },
  {
    key: 15,
    categoryTitle: "Signals & Systems",
    resources: [
      {
        key: 1,
        title: "MIT Signals and Systems Course",
        url: "https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/",
        description: "Lecture videos, notes, and problem sets.",
      },
    ],
  },
  {
    key: 16,
    categoryTitle: "Communications",
    resources: [
      {
        key: 1,
        title: "MIT Communication Systems Engineering",
        url: "https://ocw.mit.edu/courses/16-36-communication-systems-engineering-spring-2009/",
        description: "Lecture notes, exams, and problem sets.",
      },
      {
        key: 2,
        title: "MIT Digital Communication Systems",
        url: "https://ocw.mit.edu/courses/6-02-introduction-to-eecs-ii-digital-communication-systems-fall-2012/",
        description: "Lecture videos, notes, exams, and problem sets.",
      },
      {
        key: 3,
        title: "MIT Principles of Digital Communication II",
        url: "https://ocw.mit.edu/courses/6-451-principles-of-digital-communication-ii-spring-2005/",
        description: "Lecture videos, notes, exams, and problem sets.",
      },
    ],
  },
  {
    key: 17,
    categoryTitle: "Machine Learning",
    resources: [
      {
        key: 1,
        title: "MIT Machine Learning Course",
        url: "https://ocw.mit.edu/courses/6-867-machine-learning-fall-2006/",
        description: "Lecture notes, exams, and problem sets.",
      },
      {
        key: 2,
        title: "IBM Machine Learning Articles",
        url: "https://www.ibm.com/think/topics/machine-learning",
        description:
          "Free articles introducing machine learning concepts, including the math and how to implement it.",
      },
    ],
  },
  {
    key: 18,
    categoryTitle: "Clustering",
    resources: [
      {
        key: 1,
        title: "MATLAB HDBSCAN Implementation",
        url: "https://github.com/Jorsorokin/HDBSCAN",
        description:
          "Implementation of the clustering algorithm on GitHub, with good explanations.",
      },
    ],
  },
  {
    key: 19,
    categoryTitle: "Estimation & Mathematics",
    resources: [
      {
        key: 1,
        title: "Georgia Tech Least Squares (Interactive Textbook)",
        url: "https://textbooks.math.gatech.edu/ila/least-squares.html",
        description:
          "Interactive explanation of least squares inside a linear algebra textbook.",
      },
      {
        key: 2,
        title: "MIT Differential Equations Course",
        url: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
        description: "Lecture videos, notes, exams, and problem sets.",
      },
      {
        key: 3,
        title: "How to Create and Manipulate Range-Doppler Plots",
        url: "https://apps.dtic.mil/sti/tr/pdf/ADA615308.pdf",
        description:
          "Could sit under radar or DSP, but it is heavily mathematical — filed here for the day I have the urge to read it.",
      },
    ],
  },
  {
    key: 20,
    categoryTitle: "Propagation & Coordinate Systems",
    resources: [
      {
        key: 1,
        title: "ITU-R P.618 — Propagation Attenuation Due to Atmosphere",
        url: "https://www.itu.int/rec/R-REC-P.618/en",
        description:
          "Tables and equations for propagation losses from gaseous absorption, cloud and fog attenuation, and scintillation, with respect to frequency and elevation angle.",
      },
      {
        key: 2,
        title: "ECEF Coordinate System (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Earth-centered,_Earth-fixed_coordinate_system",
        description:
          "Common for satellite navigation. Based on the center of an ellipsoid describing the earth per WGS 84 or NAD 83.",
      },
    ],
  },


];
 
export const books: Book[] = [
  {
    key: 1,
    title: "A Mathematical Theory of Communication",
    author: "Claude E. Shannon",
    description:
      "The 1948 paper that founded information theory — entropy, channel capacity, and the limits of reliable communication.",
  },
  {
    key: 2,
    title: "Understanding Digital Signal Processing",
    author: "Richard G. Lyons",
    description:
      "The standard practitioner's DSP text. Intuition-first treatment of sampling, the DFT, and filter design.",
  },
  {
    key: 3,
    title: "Introduction to Signal Processing",
    author: "Sophocles J. Orfanidis",
    description:
      "Thorough DSP text with a strong treatment of digital filter design and realization structures. Freely available from the author.",
  },
  {
    key: 4,
    title: "The Data Conversion Handbook",
    author: "Walt Kester (Analog Devices)",
    description:
      "Reference on ADCs and DACs — quantization, sampling, converter architectures, and the practical error sources that dominate real receivers.",
  },
  {
    key: 5,
    title: "Emitter Detection and Geolocation for Electronic Warfare",
    author: "Nicholas A. O'Donoughue",
    description:
      "Detection theory and geolocation for EW, covering AOA, TDOA, and FDOA with the estimation-theoretic performance bounds behind each.",
  },
  {
    key: 6,
    title: "Space Electronic Reconnaissance: Localization Theories and Methods",
    author: "Fucheng Guo, Yun Fan, and Yiyu Zhou",
    description:
      "Space-based emitter localization — single- and multi-satellite geometries, and the algorithms used to solve them.",
  },
];
 
