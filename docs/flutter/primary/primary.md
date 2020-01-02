# flutter 入门

## 前提

* 有一定的前端编程基础，不会 dart 语言无所谓的。
* 使用 vscode 开发; 相关插件(Flutter, Awesome Flutter Snippets, flutter-stylizer, Dart, Dart-import)。

## 基本组件

1. Container
2. ListView
3. GridView
4. RowWidget - Row(children: <Widget>[]) {Expanded: 灵活布局}
5. ColumnWidget
6. StackWidget - Positioned - Stack {positioned: 类比脱离文档流布局}
7. PositionWidget
8. CardWidget - Divider {Divider: 分割线组件}

## 一下是第一个 demo

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'TestWidget',
      theme: ThemeData(
        primarySwatch: Colors.green,
        backgroundColor: Colors.red
      ),
      home: Scaffold(
        appBar: AppBar(title: Text("TITLE"),),
        body: Center(
          child: Container(
            child: Image.network(
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577960070587&di=d071099dff8fd7fc860a1189b8381470&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F01%2F20120501105612_LNEzM.jpeg',
              // scale: 2,
              color: Colors.lightBlue,
              colorBlendMode: BlendMode.lighten,
              fit: BoxFit.contain,
              repeat: ImageRepeat.repeat,
            ),
            // child: Text(
            //   "hello my labelddd",
            //   style: TextStyle(
            //     fontSize: 40,
            //   ),
            // ),
            // alignment: Alignment.center, // 这个属性打开后影响 image fit 属性 
            width: 800,
            height: 200,
            // color: Colors.red,
            // padding: EdgeInsets.all(30),
            // margin: EdgeInsets.fromLTRB(10, 10, 2, 10),
            decoration: BoxDecoration(
              // color: Colors.green,
              gradient: LinearGradient(
                colors: [Colors.red, Colors.green, Colors.purple],
              ),
              border: Border.all(width:5, color: Colors.black)
            )
          ),
        ),
      )
    );
  }
}
```

## ListView

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "myapp",
      home: Scaffold(
        appBar: AppBar(
          title: Text('my title')
        ),
        body: Center(
          child: Container(
            height: 200.0,
            // width: 400.0,
            child: ListView(
              scrollDirection: Axis.horizontal,
              children: <Widget>[
                Container(
                  width: 300,
                  child: Image.network(
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577960070587&di=d071099dff8fd7fc860a1189b8381470&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F01%2F20120501105612_LNEzM.jpeg'
                  ),
                ),
                Image.network(
                  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577960070587&di=d071099dff8fd7fc860a1189b8381470&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F01%2F20120501105612_LNEzM.jpeg'
                ),
                Image.network(
                  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577960070587&di=d071099dff8fd7fc860a1189b8381470&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F01%2F20120501105612_LNEzM.jpeg'
                ),
                Image.network(
                  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577960070587&di=d071099dff8fd7fc860a1189b8381470&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F01%2F20120501105612_LNEzM.jpeg'
                ),
              ],
            ),
          ),
        )
      ),
    );
  }
}
```

## ListView 分开

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'home',
      home: Scaffold(
        appBar: AppBar(title: Text('my title'),),
        body: MyList()
      )
    );
  }
}

class MyList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
          scrollDirection: Axis.horizontal,
          children: <Widget>[
            Container(
              child: Text('kkkkkk'),
            ),
            Container(
              child: Text('jjjjjj'),
            )
          ],
        );
  }
}
```

## ListView 根据数据生成

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp(
  items: List<String>.generate(100, (i) => "Item $i")
));

class MyApp extends StatelessWidget {

  final List<String> items;

  MyApp({Key key, @required this.items}):super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'home',
      home: Scaffold(
        appBar: AppBar(title: Text('my title'),),
        body: MyList(items: items,)
      )
    );
  }
}

class MyList extends StatelessWidget {
  final List<String> items;

  MyList({Key key, @required this.items}):super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: items.length,
      itemBuilder: (context, index) {
        return Text('${items[index]}');
      },
    );
  }
}
```

## GridView 两种方式

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'home',
      home: Scaffold(
        appBar: AppBar(title: Text('my title'),),
        body: MyGrideView0()
      )
    );
  }
}

// the old style to write code of GrideView
class MyGrideView0 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GridView(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        mainAxisSpacing: 3,
        crossAxisSpacing: 3,
        childAspectRatio: 0.7, // 宽高比
      ),
      children: <Widget>[
        Container(
          child: Text('im not strong enough',),
          color: Colors.black,
        ),
        Container(
          child: Text('i like kungfu',),
          color: Colors.black,
        ),
        Container(
          child: Text('you are my girlfriend', style: TextStyle(
            color: Colors.red
          )),
          color: Colors.black,
        ),
        Container(
          child: Text('everything is not important',),
          color: Colors.black,
        ),
      ],
    );
  }
}

class MyGrideView1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GridView.count(
      padding: EdgeInsets.all(10.0),
      crossAxisSpacing: 40,
      crossAxisCount: 3, // 几列
      children: <Widget>[
        Text('im not strong enough'),
        Text('i like kungfu'),
        Text('i like watch movie'),
        Text('i like take vlog'),
        Text('i like write blog'),

      ],
    );
  }
}

```

## Row

```dart

class MyRow extends StatelessWidget {

  _change() {
     print("this is red button");
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        Expanded( // Expanded 灵活布局, 平均分配撑满空间
          child: Container(
            width: 99,
            child: Text('data', textAlign: TextAlign.center,),
            color: Colors.green,
          ),
        ),
        Container(
          width: 99,
          child: Text('data'),
          color: Colors.green,
          margin: EdgeInsets.only(left: 10),
        ),
        Container(
          // width: 99,
          child: RaisedButton(
            color: Colors.redAccent,
            onPressed: () => {
              _change()
            },
            child: Text('red button'),
          ),
          color: Colors.green,
          margin: EdgeInsets.only(left: 10),
        )
      ],
    );
  }
}
```

## Column

```dart

class MyColumn extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.green,
      width: 200,
      child: Column(
        children: <Widget>[
          Expanded(
            child: Container(
              color: Colors.red,
              child: Text('this is column Widget0this is column Widget0this is column Widget0'),
            ),
          ),
            Container(
              child: Text('this is my footer'),
            ),
        ],
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.center,
        // acrossAxisAlignment:CrossAxisAlignment.center
      ),
    );
  }
}
```

## Stack

```dart

class MyStack1 extends StatelessWidget {
  var stack = Stack(
    alignment: FractionalOffset(0.5, 0.9), // x,y 偏移
    children: <Widget>[
      CircleAvatar(
        backgroundImage: NetworkImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577960070587&di=d071099dff8fd7fc860a1189b8381470&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F01%2F20120501105612_LNEzM.jpeg'),
        radius: 100.0,
      ),
      // 类比 web 脱离文档流布局
      Positioned(
        // top: 10,
        bottom: 10,
        left: 10,
        child: Text('THIS IS MY BOOK'),
      )
    ],
  );

  @override
  Widget build(BuildContext context) {
    return Center(
      child: stack,
    );
  }
}

class MyStack0 extends StatelessWidget {
  var stack = Stack(
    alignment: FractionalOffset(0.5, 0.9), // x,y 偏移
    children: <Widget>[
      CircleAvatar(
        backgroundImage: NetworkImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577960070587&di=d071099dff8fd7fc860a1189b8381470&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F01%2F20120501105612_LNEzM.jpeg'),
        radius: 100.0,
      ),
      Container(
        decoration: BoxDecoration(
          color: Colors.lightBlueAccent
        ),
        padding: EdgeInsets.all(5.0),
        child: Text('title', style: TextStyle(color: Colors.black),),
      )
    ],
  );

  @override
  Widget build(BuildContext context) {
    return Center(
      child: stack,
    );
  }
}

```

## CardWidget

```dart
class MyCard extends StatelessWidget {
  var card = Card(
    child: Column(
      children: <Widget>[
        ListTile(
          title: Text('AN HUI PROVENCE LUAN CITY', style: TextStyle(
              fontWeight: FontWeight.w500
            ),
          ),
          subtitle: Text('AN HUI PROVENCE LUAN CITY', style: TextStyle(
              fontWeight: FontWeight.w200
            ),
          ),
          leading: Image.network('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577960070587&di=d071099dff8fd7fc860a1189b8381470&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F01%2F20120501105612_LNEzM.jpeg'),
        ),
        Divider(), // 分割线组件
        ListTile(
          title: Text('AN HUI IS A PLACE OF MY BORN', style: TextStyle(
              fontWeight: FontWeight.w500
            ),
          ),
          subtitle: Text('AN HUI PROVENCE LUAN CITY', style: TextStyle(
              fontWeight: FontWeight.w200
            ),
          ),
          leading: Image.network('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577960070587&di=d071099dff8fd7fc860a1189b8381470&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F01%2F20120501105612_LNEzM.jpeg'),
        ),
        ListTile(
          title: Text('AN HUI PROVENCE LUAN CITY', style: TextStyle(
              fontWeight: FontWeight.w500
            ),
          ),
          subtitle: Text('AN HUI PROVENCE LUAN CITY', style: TextStyle(
              fontWeight: FontWeight.w200
            ),
          ),
          leading: Image.network('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577960070587&di=d071099dff8fd7fc860a1189b8381470&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F01%2F20120501105612_LNEzM.jpeg'),
        )
      ],
    ),
  );
  
  @override
  Widget build(BuildContext context) {
    return card;
  }
}
```

## 导航

* 跳转和返回

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: MyApp() ,
    ),
  );
}

class MyApp extends StatelessWidget {

  BuildContext _context;

  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      title: 'home',
      home: Scaffold(
        appBar: AppBar(title: Text('FIRST PAGE'),),
        body: ListView(
          children: <Widget>[
            Builder( // 注意：跳转要用 builder 包装一下，通过 context 才可以跳转
              builder: (context) => RaisedButton(
                onPressed: () => {
                  // print("object$context")
                  Navigator.of(context).pushNamed('/settings')
                  // Navigator.push(context, new MaterialPageRoute(
                  //   builder: (context) => new MyApp1()
                  // ))
                },
                child: Text('CLICK ME TO OPEN OTHER PAGE 1'),
              ),
            ),
            RaisedButton(
                onPressed: () => {
                  Navigator.of(_context).pushNamed('/otherpage')
                },
                child: Text('CLICK ME TO OPEN OTHER PAGE 2'),
              ),
          ],
        )
      ),
      routes: <String, WidgetBuilder>{
        '/otherpage': (BuildContext context) => new MyApp1(),
      },
    );
  }
}

class MyApp1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'home',
      home:Scaffold(
        appBar: AppBar(title: Text('Second PAGE'),),
        body: Center(
          child: ListView(
            children: <Widget>[
              Text('this is my second page'),
              RaisedButton(
                child: Text('GO BACK'),
                onPressed: () => {
                  // print('go back!!')
                  Navigator.pop(context)
                  // Navigator.of(context).pop()
                },
              )
            ],
          ),
        )));
  }
}
```






## 跳转传参，返回传参

* 正向传参: 直接在初始化的过程中复制
* 反向传值: 可以通过将本地的 function 当参数传递的方式，进行数据回调。
* 反向传值（async, await）: 通过返回界面直接返回数据
* State: 状态机，返回修改界面中的数据；（这个状态机居然也要把 界面写进去，个人感觉还是 React 的逻辑比较好

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: MyApp() ,
    ),
  );
}

class Productj {
  final String title;
  final String description;

  Productj(this.title, this.description);
}

class MyApp extends StatelessWidget {
    
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'home',
      home: MyApp0(),
      /// 可以使用 路由提前定义跳转
      routes: <String, WidgetBuilder>{
        '/otherpage': (BuildContext context) => MyApp1(params: Productj('title', 'description')),
      },
    );
  }
}

class _MyApp0State extends State<MyApp0> with TickerProviderStateMixin {
  String callback = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text('FIRST PAGE'),),
        body: ListView(
          children: <Widget>[
            Text('${callback}'),
            Builder( // 注意：跳转要用 builder 包装一下，通过 context 才可以跳转
              builder: (context) => RaisedButton(
                onPressed: () => {
                  // this._naviagtionTo(context)
                  this._navigationToj(context)
                },
                child: Text('CLICK ME TO OPEN OTHER PAGE 1'),
              ),
            ),
          ],
        )
      );
  }

  _navigationToj(BuildContext context) async{
    final result = await Navigator.push(context, new MaterialPageRoute(
                    builder: (context) =>  MyApp1(params: Productj('title', 'description'), f: this._test)
                  ));
    Scaffold.of(context).showSnackBar(SnackBar(content: Text("${result} 哈哈哈", textAlign: TextAlign.center,),));

    if (this.callback.length > 0) {
      this.callback = '';
    } else {
      this.callback = result;
    }
  }

  _naviagtionTo(BuildContext context) async{
    final result = await Navigator.of(context).pushNamed('/otherpage');
    Scaffold.of(context).showSnackBar(SnackBar(content: Text("$result", textAlign: TextAlign.center,),));

    if (this.callback.length > 0) {
      this.callback = '';
      // setState(() {
      //   callback
      // });
    } else {
      this.callback = result;
    }
  }

  _test (String s) {
    print('object' + s);
    // this.callback = s;
  }
}

class MyApp0 extends StatefulWidget {
   @override
   _MyApp0State createState() => _MyApp0State();
}

class MyApp1 extends StatelessWidget {

  final Productj params;

  final Function(String s) f; // function 可以当参数传递

  _t (BuildContext context) {
    this.f('kkk');
    Navigator.pop(context, '给你一个小姐姐');
  }
  MyApp1({Key key, @required this.params, this.f}):super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'home',
      home:Scaffold(
        appBar: AppBar(title: Text('Second PAGE'),),
        body: Center(
          child: ListView(
            children: <Widget>[
              Text('this is my second page' + this.params.description),
              RaisedButton(
                child: Text('GO BACK'),
                onPressed: () => {
                  this._t(context)
                  // print('go back!!')
                  // Navigator.pop(context)
                  // Navigator.of(context).pop()
                },
              )
            ],
          ),
        )));
  }
}
```

## 本地图片加载

* pubspec.yaml 文件配置自己的图片

```dart
 assets:
  - images/a.png
```

* 代码写法

```dart

class MyImageApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'home',
      home: Scaffold(
        appBar: AppBar(title: Text('LOCAL IMAGE PAGE'),),
        body: Center(
          child: Image.asset('images/a.png'),
        )
      ),
    );
  }
}
```
