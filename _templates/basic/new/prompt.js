module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
          {
            type: "input",
            name: "title",
            message: "What is the title?",
          },
        ])
        .then(({ title }) => {
          resolve({
            title,
          })
        })
    })
  },
}
