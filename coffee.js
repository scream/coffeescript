(function() {
  var Account, cube, eldest, grade, hello, square, world;
  var __slice = Array.prototype.slice, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  (function() {
    var example, example1, example2, example3, example4;
    example = function(param1, param2) {
      var p1, p2;
      p1 = param1;
      p2 = param2;
    };
    example1 = function() {
      var p1, param1;
      param1 = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return p1 = param1;
    };
    example2 = function() {
      var p1, p2, param1, param2;
      param1 = arguments[0], param2 = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      p1 = param1;
      return p2 = param2;
    };
    example3 = function() {
      var p1, p2, p3, param1, param2, param3;
      param1 = arguments[0], param2 = arguments[1], param3 = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      p1 = param1;
      p2 = param2;
      p3 = param3;
      return param3;
    };
    example4 = function(param1, param2) {
      var param3;
      param3 = "Filling the " + param1 + " with " + param2 + "...";
    };
  })();
  (function() {
    var cubes, list, math, num, number, opposite, square;
    number = 42;
    opposite = true;
    if (opposite) {
      number = -42;
    }
    square = function(x) {
      return x * x;
    };
    list = [];
    math = {
      param1: param1,
      param2: param2,
      param3: param3,
      param4: param4
    };
    if (typeof elvis !== "undefined" && elvis !== null) {
      alert("I knew it");
    }
    cubes = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = list.length; _i < _len; _i++) {
        num = list[_i];
        _results.push(math.cube(num));
      }
      return _results;
    })();
    $('.account').attr({
      "class": 'active'
    });
    log(object["class"]);
  })();
  (function() {
    var date, mood;
    if (singing) {
      mood = greatlyImprove;
    }
    if (happy && knowsIt) {
      clapsHands();
      chaChaCha();
    } else {
      showIt();
    }
    date = friday ? sue : jill;
    options || (options = defaults);
  })();
  (function() {
    var courses, dish, food, foods, i, _i, _j, _len, _len2, _len3, _ref;
    _ref = ['toast', 'cheese', 'wine'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      food = _ref[_i];
      eat(food);
    }
    courses = ['greens', 'caviar', 'truffles', 'roast', 'cake'];
    for (i = 0, _len2 = courses.length; i < _len2; i++) {
      dish = courses[i];
      menu(i + 1, dish);
    }
    foods = ['broccoli', 'spinach', 'chocolate'];
    for (_j = 0, _len3 = foods.length; _j < _len3; _j++) {
      food = foods[_j];
      if (food !== 'chocolate') {
        eat(food);
      }
    }
  })();
  switch (day) {
    case "Mon":
      go(work);
      break;
    case "Tue":
      go(relax);
      break;
    case "Thu":
      go(iceFishing);
      break;
    case "Fri":
    case "Sat":
      if (day === bingoDay) {
        go(bingo);
        go(dancing);
      }
      break;
    case "Sun":
      go(church);
      break;
    default:
      go(work);
  }
  (function() {
    var context, example, list;
    list = [1, 2, 3, 4, 5, 6, 7];
    context = this;
    example = function(param1, param2) {};
    example.apply(null, list);
    example.apply(context, list);
  })();
  (function() {
    var age, ages, child, countdown, lyrics, num, yearsOld;
    countdown = (function() {
      var _results;
      _results = [];
      for (num = 10; num >= 1; num--) {
        _results.push(num);
      }
      return _results;
    })();
    yearsOld = {
      max: 10,
      ida: 9,
      tim: 11
    };
    ages = (function() {
      var _results;
      _results = [];
      for (child in yearsOld) {
        age = yearsOld[child];
        _results.push("" + child + " is " + age);
      }
      return _results;
    })();
    if (this.studyingEconomics) {
      while (supply > demand) {
        buy();
      }
      while (!(supply > demand)) {
        sell();
      }
    }
    num = 6;
    return lyrics = (function() {
      var _results;
      _results = [];
      while (num -= 1) {
        _results.push("" + num + " little monkeys, jumping on the bed.      One fell out and bumped his head.");
      }
      return _results;
    })();
  })();
  Account = function(customer, cart) {
    this.customer = customer;
    this.cart = cart;
    return $('.shopping_cart').bind('click', __bind(function(event) {
      return this.customer.purchase(this.cart);
    }, this));
  };
  (function() {
    var filename, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      filename = list[_i];
      _results.push((function(filename) {
        return fs.readFile(filename, function(err, contents) {
          return compile(filename, contents.toString());
        });
      })(filename));
    }
    return _results;
  })();
  (function() {
    var copy, middle, numbers;
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    copy = numbers.slice(0, numbers.length);
    return middle = copy.slice(3, 7);
  })();
  (function() {
    var numbers, _ref;
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return ([].splice.apply(numbers, [3, 4].concat(_ref = [-3, -4, -5, -6])), _ref);
  })();
  grade = function(student) {
    if (student.excellentWork) {
      return "A+";
    } else if (student.okayStuff) {
      if (student.triedHard) {
        return "B";
      } else {
        return "B-";
      }
    } else {
      return "C";
    }
  };
  eldest = 24 > 21 ? "Liz" : "Ike";
  (function() {
    var hello, world;
    hello = arguments[0], world = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    hello = hello + world;
    return console.log(hello);
  })('hello', 'world');
  hello = '1';
  world = '2';
  (function(hello, world) {
    return console.log(hello + world);
  })(hello, world);
  square = function(x) {
    return x * x;
  };
  cube = function(x) {
    return square(x) * x;
  };
}).call(this);
