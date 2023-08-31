const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const allTours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: allTours.length,
      data: {
        tours: allTours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.updateTour = (req, res) => {
  // let indexPos = undefined;
  // let tour = tours.find((ele, index) => {
  //   if (ele.id == req.params.id) {
  //     indexPos = index;
  //     return true;
  //   }
  // });
  // const updatedData = Object.assign(req.body, tour);
  // tours[indexPos] = updatedData;
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         tour: updatedData,
  //       },
  //     });
  //   },
  // );
};

exports.deleteTour = (req, res) => {
  let indexPos = undefined;
  let tour = tours.find((ele, index) => {
    if (ele.id == req.params.id) {
      indexPos = index;
      return true;
    }
  });
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
