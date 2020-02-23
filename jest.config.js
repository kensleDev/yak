module.exports = {
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json",
      skipBabel: true
    }
  },
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/test/**/*.test.(ts|js)"],
  testEnvironment: "node",
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/$1",
    "^text/(.*)$": "<rootDir>/src/text/$1"
  }
};
