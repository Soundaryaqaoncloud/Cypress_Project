module.exports = (on, config) => {
    // Example of setting an environment variable from process.env
    config.env.MY_VARIABLE = process.env.MY_VARIABLE || "default_value";
  
    // You can add more environment variables here as needed
    return config;
  };
  