# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


```
def fs(a, b, c):
...     return f'{{date: new Date("2022-05-{a}"), cost: {b}, goal: {c} }}'

",".join([fs(i, random.randint(100, 250), random.randint(100, 250)) for i in range(1, 31)])

```

```
>>> def fs(a, b, c, d, e, f, g, m):
...     return f'{{date: new Date("2022-{m}-{a}"), production_cost: {b}, production_goal: {c}, quantity_goal: {d}, quantity_actual: {e}, fte: {f}, goal: {g} }}'
...
>>> ",".join([fs(i, random.randint(586, 635), 524, 750, random.randint(583, 910), random.randint(96, 106), 95, 5) for i in range(1, 32)])
```

```
>>> json
'[\n    {\n        date: new Date("2022-5-1"),\n        production_cost: 612,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 678,\n        fte: 102,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-2"),\n        production_cost: 601,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 850,\n        fte: 97,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-3"),\n        production_cost: 594,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 817,\n        fte: 101,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-4"),\n        production_cost: 619,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 858,\n        fte: 101,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-5"),\n        production_cost: 594,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 893,\n        fte: 103,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-6"),\n        production_cost: 625,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 658,\n        fte: 100,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-7"),\n        production_cost: 615,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 667,\n        fte: 97,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-8"),\n        production_cost: 586,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 842,\n        fte: 102,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-9"),\n        production_cost: 602,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 674,\n        fte: 106,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-10"),\n        production_cost: 611,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 871,\n        fte: 103,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-11"),\n        production_cost: 631,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 668,\n        fte: 97,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-12"),\n        production_cost: 610,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 830,\n        fte: 101,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-13"),\n        production_cost: 621,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 653,\n        fte: 100,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-14"),\n        production_cost: 610,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 838,\n        fte: 105,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-15"),\n        production_cost: 621,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 805,\n        fte: 105,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-16"),\n        production_cost: 612,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 623,\n        fte: 101,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-17"),\n        production_cost: 605,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 672,\n        fte: 106,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-18"),\n        production_cost: 593,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 830,\n        fte: 105,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-19"),\n        production_cost: 631,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 817,\n        fte: 101,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-20"),\n        production_cost: 630,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 891,\n        fte: 104,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-21"),\n        production_cost: 592,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 701,\n        fte: 99,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-22"),\n        production_cost: 619,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 612,\n        fte: 96,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-23"),\n        production_cost: 601,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 837,\n        fte: 104,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-24"),\n        production_cost: 586,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 814,\n        fte: 103,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-25"),\n        production_cost: 601,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 873,\n        fte: 100,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-26"),\n        production_cost: 587,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 752,\n        fte: 99,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-27"),\n        production_cost: 631,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 715,\n        fte: 96,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-28"),\n        production_cost: 624,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 648,\n        fte: 99,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-29"),\n        production_cost: 587,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 627,\n        fte: 97,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-30"),\n        production_cost: 600,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 642,\n        fte: 100,\n        goal: 95,\n    },\n    {\n        date: new Date("2022-5-31"),\n        production_cost: 619,\n        production_goal: 524,\n        quantity_goal: 750,\n        quantity_actual: 896,\n        fte: 102,\n        goal: 95,\n    },\n]'
>>> import json as js
>>> j = js.loads(json)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "C:\Users\sohma_w4\scoop\apps\python\current\lib\json\__init__.py", line 346, in loads
    return _default_decoder.decode(s)
  File "C:\Users\sohma_w4\scoop\apps\python\current\lib\json\decoder.py", line 337, in decode
    obj, end = self.raw_decode(s, idx=_w(s, 0).end())
  File "C:\Users\sohma_w4\scoop\apps\python\current\lib\json\decoder.py", line 353, in raw_decode
    obj, end = self.scan_once(s, idx)
json.decoder.JSONDecodeError: Expecting property name enclosed in double quotes: line 3 column 9 (char 16)
>>> import json
>>> j = """[{"date":"2022-04-30T18:30:00.000Z","production_cost":612,"production_goal":524,"quantity_goal":750,"quantity_actual":678,"fte":102,"goal":95},{"date":"2022-05-01T18:30:00.000Z","production_cost":601,"production_goal":524,"quantity_goal":750,"quantity_actual":850,"fte":97,"goal":95},{"date":"2022-05-02T18:30:00.000Z","production_cost":594,"production_goal":524,"quantity_goal":750,"quantity_actual":817,"fte":101,"goal":95},{"date":"2022-05-03T18:30:00.000Z","production_cost":619,"production_goal":524,"quantity_goal":750,"quantity_actual":858,"fte":101,"goal":95},{"date":"2022-05-04T18:30:00.000Z","production_cost":594,"production_goal":524,"quantity_goal":750,"quantity_actual":893,"fte":103,"goal":95},{"date":"2022-05-05T18:30:00.000Z","production_cost":625,"production_goal":524,"quantity_goal":750,"quantity_actual":658,"fte":100,"goal":95},{"date":"2022-05-06T18:30:00.000Z","production_cost":615,"production_goal":524,"quantity_goal":750,"quantity_actual":667,"fte":97,"goal":95},{"date":"2022-05-07T18:30:00.000Z","production_cost":586,"production_goal":524,"quantity_goal":750,"quantity_actual":842,"fte":102,"goal":95},{"date":"2022-05-08T18:30:00.000Z","production_cost":602,"production_goal":524,"quantity_goal":750,"quantity_actual":674,"fte":106,"goal":95},{"date":"2022-05-09T18:30:00.000Z","production_cost":611,"production_goal":524,"quantity_goal":750,"quantity_actual":871,"fte":103,"goal":95},{"date":"2022-05-10T18:30:00.000Z","production_cost":631,"production_goal":524,"quantity_goal":750,"quantity_actual":668,"fte":97,"goal":95},{"date":"2022-05-11T18:30:00.000Z","production_cost":610,"production_goal":524,"quantity_goal":750,"quantity_actual":830,"fte":101,"goal":95},{"date":"2022-05-12T18:30:00.000Z","production_cost":621,"production_goal":524,"quantity_goal":750,"quantity_actual":653,"fte":100,"goal":95},{"date":"2022-05-13T18:30:00.000Z","production_cost":610,"production_goal":524,"quantity_goal":750,"quantity_actual":838,"fte":105,"goal":95},{"date":"2022-05-14T18:30:00.000Z","production_cost":621,"production_goal":524,"quantity_goal":750,"quantity_actual":805,"fte":105,"goal":95},{"date":"2022-05-15T18:30:00.000Z","production_cost":612,"production_goal":524,"quantity_goal":750,"quantity_actual":623,"fte":101,"goal":95},{"date":"2022-05-16T18:30:00.000Z","production_cost":605,"production_goal":524,"quantity_goal":750,"quantity_actual":672,"fte":106,"goal":95},{"date":"2022-05-17T18:30:00.000Z","production_cost":593,"production_goal":524,"quantity_goal":750,"quantity_actual":830,"fte":105,"goal":95},{"date":"2022-05-18T18:30:00.000Z","production_cost":631,"production_goal":524,"quantity_goal":750,"quantity_actual":817,"fte":101,"goal":95},{"date":"2022-05-19T18:30:00.000Z","production_cost":630,"production_goal":524,"quantity_goal":750,"quantity_actual":891,"fte":104,"goal":95},{"date":"2022-05-20T18:30:00.000Z","production_cost":592,"production_goal":524,"quantity_goal":750,"quantity_actual":701,"fte":99,"goal":95},{"date":"2022-05-21T18:30:00.000Z","production_cost":619,"production_goal":524,"quantity_goal":750,"quantity_actual":612,"fte":96,"goal":95},{"date":"2022-05-22T18:30:00.000Z","production_cost":601,"production_goal":524,"quantity_goal":750,"quantity_actual":837,"fte":104,"goal":95},{"date":"2022-05-23T18:30:00.000Z","production_cost":586,"production_goal":524,"quantity_goal":750,"quantity_actual":814,"fte":103,"goal":95},{"date":"2022-05-24T18:30:00.000Z","production_cost":601,"production_goal":524,"quantity_goal":750,"quantity_actual":873,"fte":100,"goal":95},{"date":"2022-05-25T18:30:00.000Z","production_cost":587,"production_goal":524,"quantity_goal":750,"quantity_actual":752,"fte":99,"goal":95},{"date":"2022-05-26T18:30:00.000Z","production_cost":631,"production_goal":524,"quantity_goal":750,"quantity_actual":715,"fte":96,"goal":95},{"date":"2022-05-27T18:30:00.000Z","production_cost":624,"production_goal":524,"quantity_goal":750,"quantity_actual":648,"fte":99,"goal":95},{"date":"2022-05-28T18:30:00.000Z","production_cost":587,"production_goal":524,"quantity_goal":750,"quantity_actual":627,"fte":97,"goal":95},{"date":"2022-05-29T18:30:00.000Z","production_cost":600,"production_goal":524,"quantity_goal":750,"quantity_actual":642,"fte":100,"goal":95},{"date":"2022-05-30T18:30:00.000Z","production_cost":619,"production_goal":524,"quantity_goal":750,"quantity_actual":896,"fte":102,"goal":95}]"""
>>> js = json.loads(j)
>>> js
[{'date': '2022-04-30T18:30:00.000Z', 'production_cost': 612, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 678, 'fte': 102, 'goal': 95}, {'date': '2022-05-01T18:30:00.000Z', 'production_cost': 601, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 850, 'fte': 97, 'goal': 95}, {'date': '2022-05-02T18:30:00.000Z', 'production_cost': 594, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 817, 'fte': 101, 'goal': 95}, {'date': '2022-05-03T18:30:00.000Z', 'production_cost': 619, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 858, 'fte': 101, 'goal': 95}, {'date': '2022-05-04T18:30:00.000Z', 'production_cost': 594, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 893, 'fte': 103, 'goal': 95}, {'date': '2022-05-05T18:30:00.000Z', 'production_cost': 625, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 658, 'fte': 100, 'goal': 95}, {'date': '2022-05-06T18:30:00.000Z', 'production_cost': 615, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 667, 'fte': 97, 'goal': 95}, {'date': '2022-05-07T18:30:00.000Z', 'production_cost': 586, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 842, 'fte': 102, 'goal': 95}, {'date': '2022-05-08T18:30:00.000Z', 'production_cost': 602, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 674, 'fte': 106, 'goal': 95}, {'date': '2022-05-09T18:30:00.000Z', 'production_cost': 611, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 871, 'fte': 103, 'goal': 95}, {'date': '2022-05-10T18:30:00.000Z', 'production_cost': 631, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 668, 'fte': 97, 'goal': 95}, {'date': '2022-05-11T18:30:00.000Z', 'production_cost': 610, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 830, 'fte': 101, 'goal': 95}, {'date': '2022-05-12T18:30:00.000Z', 'production_cost': 621, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 653, 'fte': 100, 'goal': 95}, {'date': '2022-05-13T18:30:00.000Z', 'production_cost': 610, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 838, 'fte': 105, 'goal': 95}, {'date': '2022-05-14T18:30:00.000Z', 'production_cost': 621, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 805, 'fte': 105, 'goal': 95}, {'date': '2022-05-15T18:30:00.000Z', 'production_cost': 612, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 623, 'fte': 101, 'goal': 95}, {'date': '2022-05-16T18:30:00.000Z', 'production_cost': 605, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 672, 'fte': 106, 'goal': 95}, {'date': '2022-05-17T18:30:00.000Z', 'production_cost': 593, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 830, 'fte': 105, 'goal': 95}, {'date': '2022-05-18T18:30:00.000Z', 'production_cost': 631, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 817, 'fte': 101, 'goal': 95}, {'date': '2022-05-19T18:30:00.000Z', 'production_cost': 630, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 891, 'fte': 104, 'goal': 95}, {'date': '2022-05-20T18:30:00.000Z', 'production_cost': 592, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 701, 'fte': 99, 'goal': 95}, {'date': '2022-05-21T18:30:00.000Z', 'production_cost': 619, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 612, 'fte': 96, 'goal': 95}, {'date': '2022-05-22T18:30:00.000Z', 'production_cost': 601, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 837, 'fte': 104, 'goal': 95}, {'date': '2022-05-23T18:30:00.000Z', 'production_cost': 586, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 814, 'fte': 103, 'goal': 95}, {'date': '2022-05-24T18:30:00.000Z', 'production_cost': 601, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 873, 'fte': 100, 'goal': 95}, {'date': '2022-05-25T18:30:00.000Z', 'production_cost': 587, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 752, 'fte': 99, 'goal': 95}, {'date': '2022-05-26T18:30:00.000Z', 'production_cost': 631, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 715, 'fte': 96, 'goal': 95}, {'date': '2022-05-27T18:30:00.000Z', 'production_cost': 624, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 648, 'fte': 99, 'goal': 95}, {'date': '2022-05-28T18:30:00.000Z', 'production_cost': 587, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 627, 'fte': 97, 'goal': 95}, {'date': '2022-05-29T18:30:00.000Z', 'production_cost': 600, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 642, 'fte': 100, 'goal': 95}, {'date': '2022-05-30T18:30:00.000Z', 'production_cost': 619, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 896, 'fte': 102, 'goal': 95}]
>>> js
[{'date': '2022-04-30T18:30:00.000Z', 'production_cost': 612, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 678, 'fte': 102, 'goal': 95}, {'date': '2022-05-01T18:30:00.000Z', 'production_cost': 601, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 850, 'fte': 97, 'goal': 95}, {'date': '2022-05-02T18:30:00.000Z', 'production_cost': 594, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 817, 'fte': 101, 'goal': 95}, {'date': '2022-05-03T18:30:00.000Z', 'production_cost': 619, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 858, 'fte': 101, 'goal': 95}, {'date': '2022-05-04T18:30:00.000Z', 'production_cost': 594, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 893, 'fte': 103, 'goal': 95}, {'date': '2022-05-05T18:30:00.000Z', 'production_cost': 625, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 658, 'fte': 100, 'goal': 95}, {'date': '2022-05-06T18:30:00.000Z', 'production_cost': 615, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 667, 'fte': 97, 'goal': 95}, {'date': '2022-05-07T18:30:00.000Z', 'production_cost': 586, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 842, 'fte': 102, 'goal': 95}, {'date': '2022-05-08T18:30:00.000Z', 'production_cost': 602, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 674, 'fte': 106, 'goal': 95}, {'date': '2022-05-09T18:30:00.000Z', 'production_cost': 611, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 871, 'fte': 103, 'goal': 95}, {'date': '2022-05-10T18:30:00.000Z', 'production_cost': 631, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 668, 'fte': 97, 'goal': 95}, {'date': '2022-05-11T18:30:00.000Z', 'production_cost': 610, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 830, 'fte': 101, 'goal': 95}, {'date': '2022-05-12T18:30:00.000Z', 'production_cost': 621, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 653, 'fte': 100, 'goal': 95}, {'date': '2022-05-13T18:30:00.000Z', 'production_cost': 610, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 838, 'fte': 105, 'goal': 95}, {'date': '2022-05-14T18:30:00.000Z', 'production_cost': 621, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 805, 'fte': 105, 'goal': 95}, {'date': '2022-05-15T18:30:00.000Z', 'production_cost': 612, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 623, 'fte': 101, 'goal': 95}, {'date': '2022-05-16T18:30:00.000Z', 'production_cost': 605, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 672, 'fte': 106, 'goal': 95}, {'date': '2022-05-17T18:30:00.000Z', 'production_cost': 593, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 830, 'fte': 105, 'goal': 95}, {'date': '2022-05-18T18:30:00.000Z', 'production_cost': 631, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 817, 'fte': 101, 'goal': 95}, {'date': '2022-05-19T18:30:00.000Z', 'production_cost': 630, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 891, 'fte': 104, 'goal': 95}, {'date': '2022-05-20T18:30:00.000Z', 'production_cost': 592, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 701, 'fte': 99, 'goal': 95}, {'date': '2022-05-21T18:30:00.000Z', 'production_cost': 619, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 612, 'fte': 96, 'goal': 95}, {'date': '2022-05-22T18:30:00.000Z', 'production_cost': 601, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 837, 'fte': 104, 'goal': 95}, {'date': '2022-05-23T18:30:00.000Z', 'production_cost': 586, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 814, 'fte': 103, 'goal': 95}, {'date': '2022-05-24T18:30:00.000Z', 'production_cost': 601, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 873, 'fte': 100, 'goal': 95}, {'date': '2022-05-25T18:30:00.000Z', 'production_cost': 587, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 752, 'fte': 99, 'goal': 95}, {'date': '2022-05-26T18:30:00.000Z', 'production_cost': 631, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 715, 'fte': 96, 'goal': 95}, {'date': '2022-05-27T18:30:00.000Z', 'production_cost': 624, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 648, 'fte': 99, 'goal': 95}, {'date': '2022-05-28T18:30:00.000Z', 'production_cost': 587, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 627, 'fte': 97, 'goal': 95}, {'date': '2022-05-29T18:30:00.000Z', 'production_cost': 600, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 642, 'fte': 100, 'goal': 95}, {'date': '2022-05-30T18:30:00.000Z', 'production_cost': 619, 'production_goal': 524, 'quantity_goal': 750, 'quantity_actual': 896, 'fte': 102, 'goal': 95}]
>>> [{k:v for k, v in js.iteritems() if k=="date"} for d in js]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 1, in <listcomp>
AttributeError: 'list' object has no attribute 'iteritems'
>>> [{k:v for k, v in d.iteritems() if k=="date"} for d in js]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 1, in <listcomp>
AttributeError: 'dict' object has no attribute 'iteritems'
>>> [{k:v for k, v in d.items() if k=="date"} for d in js]
[{'date': '2022-04-30T18:30:00.000Z'}, {'date': '2022-05-01T18:30:00.000Z'}, {'date': '2022-05-02T18:30:00.000Z'}, {'date': '2022-05-03T18:30:00.000Z'}, {'date': '2022-05-04T18:30:00.000Z'}, {'date': '2022-05-05T18:30:00.000Z'}, {'date': '2022-05-06T18:30:00.000Z'}, {'date': '2022-05-07T18:30:00.000Z'}, {'date': '2022-05-08T18:30:00.000Z'}, {'date': '2022-05-09T18:30:00.000Z'}, {'date': '2022-05-10T18:30:00.000Z'}, {'date': '2022-05-11T18:30:00.000Z'}, {'date': '2022-05-12T18:30:00.000Z'}, {'date': '2022-05-13T18:30:00.000Z'}, {'date': '2022-05-14T18:30:00.000Z'}, {'date': '2022-05-15T18:30:00.000Z'}, {'date': '2022-05-16T18:30:00.000Z'}, {'date': '2022-05-17T18:30:00.000Z'}, {'date': '2022-05-18T18:30:00.000Z'}, {'date': '2022-05-19T18:30:00.000Z'}, {'date': '2022-05-20T18:30:00.000Z'}, {'date': '2022-05-21T18:30:00.000Z'}, {'date': '2022-05-22T18:30:00.000Z'}, {'date': '2022-05-23T18:30:00.000Z'}, {'date': '2022-05-24T18:30:00.000Z'}, {'date': '2022-05-25T18:30:00.000Z'}, {'date': '2022-05-26T18:30:00.000Z'}, {'date': '2022-05-27T18:30:00.000Z'}, {'date': '2022-05-28T18:30:00.000Z'}, {'date': '2022-05-29T18:30:00.000Z'}, {'date': '2022-05-30T18:30:00.000Z'}]
>>> data = [{k:v for k, v in d.items() if k=="date"} for d in js]
>>> data
[{'date': '2022-04-30T18:30:00.000Z'}, {'date': '2022-05-01T18:30:00.000Z'}, {'date': '2022-05-02T18:30:00.000Z'}, {'date': '2022-05-03T18:30:00.000Z'}, {'date': '2022-05-04T18:30:00.000Z'}, {'date': '2022-05-05T18:30:00.000Z'}, {'date': '2022-05-06T18:30:00.000Z'}, {'date': '2022-05-07T18:30:00.000Z'}, {'date': '2022-05-08T18:30:00.000Z'}, {'date': '2022-05-09T18:30:00.000Z'}, {'date': '2022-05-10T18:30:00.000Z'}, {'date': '2022-05-11T18:30:00.000Z'}, {'date': '2022-05-12T18:30:00.000Z'}, {'date': '2022-05-13T18:30:00.000Z'}, {'date': '2022-05-14T18:30:00.000Z'}, {'date': '2022-05-15T18:30:00.000Z'}, {'date': '2022-05-16T18:30:00.000Z'}, {'date': '2022-05-17T18:30:00.000Z'}, {'date': '2022-05-18T18:30:00.000Z'}, {'date': '2022-05-19T18:30:00.000Z'}, {'date': '2022-05-20T18:30:00.000Z'}, {'date': '2022-05-21T18:30:00.000Z'}, {'date': '2022-05-22T18:30:00.000Z'}, {'date': '2022-05-23T18:30:00.000Z'}, {'date': '2022-05-24T18:30:00.000Z'}, {'date': '2022-05-25T18:30:00.000Z'}, {'date': '2022-05-26T18:30:00.000Z'}, {'date': '2022-05-27T18:30:00.000Z'}, {'date': '2022-05-28T18:30:00.000Z'}, {'date': '2022-05-29T18:30:00.000Z'}, {'date': '2022-05-30T18:30:00.000Z'}]
>>> [{"actual": random.randint(292, 442), "prod": random.randint(257, 425)} for i in range(10)]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 1, in <listcomp>
NameError: name 'random' is not defined
>>> [{"actual": random.randint(292, 442), "prod": random.randint(257, 425)} for i in range(10)]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 1, in <listcomp>
NameError: name 'random' is not defined
>>> import random
>>> [{"actual": random.randint(292, 442), "prod": random.randint(257, 425)} for i in range(10)]
[{'actual': 370, 'prod': 398}, {'actual': 346, 'prod': 319}, {'actual': 425, 'prod': 372}, {'actual': 359, 'prod': 319}, {'actual': 413, 'prod': 298}, {'actual': 323, 'prod': 416}, {'actual': 382, 'prod': 338}, {'actual': 372, 'prod': 353}, {'actual': 304, 'prod': 321}, {'actual': 322, 'prod': 286}]
>>> [{f"team{i}": {"actual": random.randint(292, 442), "prod": random.randint(257, 425)}} for i in range(10)]
[{'team0': {'actual': 348, 'prod': 390}}, {'team1': {'actual': 363, 'prod': 364}}, {'team2': {'actual': 379, 'prod': 358}}, {'team3': {'actual': 344, 'prod': 269}}, {'team4': {'actual': 348, 'prod': 391}}, {'team5': {'actual': 427, 'prod': 279}}, {'team6': {'actual': 420, 'prod': 371}}, {'team7': {'actual': 418, 'prod': 360}}, {'team8': {'actual': 333, 'prod': 349}}, {'team9': {'actual': 403, 'prod': 283}}]
>>> full = [{f"team{i}": {"actual": random.randint(292, 442), "prod": random.randint(257, 425)}} for i in range(10)]
>>> for i in data:
...     data["x"] = 1
...
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
TypeError: list indices must be integers or slices, not str
>>> for i in data:
...     print(i)
...
{'date': '2022-04-30T18:30:00.000Z'}
{'date': '2022-05-01T18:30:00.000Z'}
{'date': '2022-05-02T18:30:00.000Z'}
{'date': '2022-05-03T18:30:00.000Z'}
{'date': '2022-05-04T18:30:00.000Z'}
{'date': '2022-05-05T18:30:00.000Z'}
{'date': '2022-05-06T18:30:00.000Z'}
{'date': '2022-05-07T18:30:00.000Z'}
{'date': '2022-05-08T18:30:00.000Z'}
{'date': '2022-05-09T18:30:00.000Z'}
{'date': '2022-05-10T18:30:00.000Z'}
{'date': '2022-05-11T18:30:00.000Z'}
{'date': '2022-05-12T18:30:00.000Z'}
{'date': '2022-05-13T18:30:00.000Z'}
{'date': '2022-05-14T18:30:00.000Z'}
{'date': '2022-05-15T18:30:00.000Z'}
{'date': '2022-05-16T18:30:00.000Z'}
{'date': '2022-05-17T18:30:00.000Z'}
{'date': '2022-05-18T18:30:00.000Z'}
{'date': '2022-05-19T18:30:00.000Z'}
{'date': '2022-05-20T18:30:00.000Z'}
{'date': '2022-05-21T18:30:00.000Z'}
{'date': '2022-05-22T18:30:00.000Z'}
{'date': '2022-05-23T18:30:00.000Z'}
{'date': '2022-05-24T18:30:00.000Z'}
{'date': '2022-05-25T18:30:00.000Z'}
{'date': '2022-05-26T18:30:00.000Z'}
{'date': '2022-05-27T18:30:00.000Z'}
{'date': '2022-05-28T18:30:00.000Z'}
{'date': '2022-05-29T18:30:00.000Z'}
{'date': '2022-05-30T18:30:00.000Z'}
>>> for i in data.keys():
...     data["i"]["values"] = [{f"team{i}": {"actual": random.randint(292, 442), "prod": random.randint(257, 425)}} for i in range(10)]
KeyboardInterrupt
>>> for i in len(data):
...     data[i]["values"] = [{f"team{i}": {"actual": random.randint(292, 442), "prod": random.randint(257, 425)}} for i in range(10)]
...
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'int' object is not iterable
>>> for i in range(len(data)):
...     data[i]["values"] = [{f"team{i}": {"actual": random.randint(292, 442), "prod": random.randint(257, 425)}} for i in range(10)]
...
>>> data
```

```
>>> for i in range(len(data)):
...     for j in range(10):
...             data[i][f"team{j}"] = {"actual": random.randint(292, 442), "prod": random.randint(257, 425)}
...
```

multiple columns
building only assign
upload order with excel
show/add perm in order show page
