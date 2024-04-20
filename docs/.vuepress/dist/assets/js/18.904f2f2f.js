(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{331:function(a,e,v){"use strict";v.r(e);var t=v(8),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"同学的一次面试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同学的一次面试"}},[a._v("#")]),a._v(" 同学的一次面试")]),a._v(" "),e("h3",{attrs:{id:"内存溢出的两种问题及原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存溢出的两种问题及原因"}},[a._v("#")]),a._v(" 内存溢出的两种问题及原因")]),a._v(" "),e("h3",{attrs:{id:"java-lang-outofmemoryerror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-lang-outofmemoryerror"}},[a._v("#")]),a._v(" java.lang.OutOfMemoryError")]),a._v(" "),e("p",[a._v("方法区主要存储类的元信息，实现在元数据区。当JVM发现元数据区没有足够的空间分配给加载的类时，抛出该异常。")]),a._v(" "),e("h3",{attrs:{id:"java-lang-stackoverflowerror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-lang-stackoverflowerror"}},[a._v("#")]),a._v(" java.lang.StackOverflowError")]),a._v(" "),e("p",[e("code",[a._v("抛出这个错误表明应用程序因为深递归导致栈被耗尽了。")]),a._v("每当java程序启动一个新的线程时，java虚拟机会为他分配一个栈，java栈以帧为单位保持线程运行状态；当线程调用一个方法是，jvm压入一个新的栈帧到这个线程的栈中，只要这个方法还没返回，这个栈帧就存在。 如果方法的嵌套调用层次太多(如递归调用),随着java栈中的帧的增多，最终导致这个线程的栈中的所有栈帧的大小的总和大于-Xss设置的值，而产生生"),e("code",[a._v("StackOverflowError")]),a._v("溢出异常。")]),a._v(" "),e("h3",{attrs:{id:"内存模型主要要回收那些类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存模型主要要回收那些类"}},[a._v("#")]),a._v(" 内存模型主要要回收那些类")]),a._v(" "),e("p",[a._v("不再使用的对象需要进行回收，不使用的类也有可能回收。")]),a._v(" "),e("h3",{attrs:{id:"如何查看gc状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何查看gc状态"}},[a._v("#")]),a._v(" 如何查看GC状态")]),a._v(" "),e("p",[a._v("使用"),e("code",[a._v("jstat")]),a._v("命令，（jstat [Options] vmid [interval] [count]）")]),a._v(" "),e("p",[e("strong",[a._v("参数说明")])]),a._v(" "),e("p",[a._v("Options，选项，我们一般使用 -gcutil 查看gc情况\nvmid，VM的进程号，即当前运行的java进程号\ninterval，间隔时间，单位为秒或者毫秒\ncount，打印次数，如果缺省则打印无数次")]),a._v(" "),e("p",[a._v("比如下面这里我们打印12538进程的GC情况")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/f6fed02e40cbf.png",alt:"image.png"}})]),a._v(" "),e("p",[e("strong",[a._v("使用阿里开源的Arthas")])]),a._v(" "),e("p",[a._v("参考")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/zlzlei/article/details/46471627",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux使用jstat命令查看jvm的GC情况_zlzlei的专栏-CSDN博客"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000019925820",target:"_blank",rel:"noopener noreferrer"}},[a._v("推荐一款阿里开源的 Java 诊断工具，好用到爆！ - SegmentFault 思否"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"bean是线程安全的吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean是线程安全的吗"}},[a._v("#")]),a._v(" Bean是线程安全的吗")]),a._v(" "),e("p",[a._v("容器本身并没有提供Bean的线程安全策略，因此可以说Spring容器中的Bean本身不具备线程安全的特性，但是我们还需要结合不同的Bean进行研究")]),a._v(" "),e("p",[a._v("Spring 的 bean 作用域（scope）类型有5种：")]),a._v(" "),e("p",[a._v("1、singleton:单例，默认作用域。")]),a._v(" "),e("p",[a._v("2、prototype:原型，每次创建一个新对象。")]),a._v(" "),e("p",[a._v("3、request:请求，每次Http请求创建一个新对象，适用于WebApplicationContext环境下。")]),a._v(" "),e("p",[a._v("4、session:会话，同一个会话共享一个实例，不同会话使用不用的实例。")]),a._v(" "),e("p",[a._v("5、global-session:全局会话，所有会话共享一个实例。")]),a._v(" "),e("p",[a._v("Spring中的Bean默认是单例模式的，框架并没有对bean进行多线程的封装处理。实际上大部分时间Bean是无状态的（比如Dao） 所以说在某种程度上来说Bean其实是安全的。")]),a._v(" "),e("p",[a._v("参考： "),e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1743283",target:"_blank",rel:"noopener noreferrer"}},[a._v("面试：Spring 中的bean 是线程安全的吗？ - 云+社区 - 腾讯云 (tencent.com)"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"sleep-0-可以干嘛"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sleep-0-可以干嘛"}},[a._v("#")]),a._v(" Sleep(0)可以干嘛")]),a._v(" "),e("p",[a._v("Thread.Sleep(0) 并非是真的要线程挂起0毫秒，意义在于这次调用Thread.Sleep(0)的当前线程确实的被冻结了一下，让其他线程有机会优先执行。Thread.Sleep(0) 是你的线程暂时放弃cpu，也就是释放一些未用的时间片给其他线程或进程使用，就相当于一个让位动作。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qiaoquan3/article/details/56281092",target:"_blank",rel:"noopener noreferrer"}},[a._v("Sleep(0)的妙用_HawkJony的博客-CSDN博客"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"大佬的面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大佬的面试题"}},[a._v("#")]),a._v(" 大佬的面试题")]),a._v(" "),e("h3",{attrs:{id:"堆分析器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆分析器"}},[a._v("#")]),a._v(" 堆分析器")]),a._v(" "),e("p",[a._v("使用"),e("strong",[a._v("MAT")]),a._v("来进行分析")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/wuyuxing24/article/details/105456317",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java堆分析器 - Eclipse Memory Analyzer Tool(MAT)_旧路-CSDN博客_java mat"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"静态变量什么时候会被回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态变量什么时候会被回收"}},[a._v("#")]),a._v(" 静态变量什么时候会被回收")]),a._v(" "),e("p",[e("strong",[a._v("静态成员一般也可以分为静态基本类型和静态引用类型。")])]),a._v(" "),e("p",[a._v("静态基本类型存储在在静态变量区域；静态引用类型的引用存储在静态变量区域，而实例（具体内容）存储在堆上。静态成员只存在一份，静态成员加载时机：类加载的时候（第一次访问），这个类中所有静态成员就会被加载在静态存储区，同时存储在"),e("a",{attrs:{href:"https://blog.csdn.net/oTengYue/article/details/48108995#",target:"_blank",rel:"noopener noreferrer"}},[a._v("静态变量区域的成员一旦创建，直到程序退出才会被回收"),e("OutboundLink")],1),a._v("。（注：如果是引用类型，如static student myst=new student()，myst=null这时候，在静态存储区里面存的是一个地址（myst），这个地址指向在堆里面创建的student实例对象，当myst=null的时候，在静态存储区里面的变量会一直存在，但是在堆里面的student实例对象因为没有变量指向它，所以会被回收）。因此如果不用的静态引用类型可以通过设置=null方式让GC可以回收其堆上的空间。")]),a._v(" "),e("h2",{attrs:{id:"知乎上看到的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#知乎上看到的"}},[a._v("#")]),a._v(" 知乎上看到的")]),a._v(" "),e("h3",{attrs:{id:"对象如何进行深拷贝-除了clone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象如何进行深拷贝-除了clone"}},[a._v("#")]),a._v(" 对象如何进行深拷贝，除了clone")]),a._v(" "),e("p",[a._v("特地谷歌了一下，发现居然还有很多方法")]),a._v(" "),e("ol",[e("li",[a._v("使用构造函数进行深拷贝")]),a._v(" "),e("li",[a._v("重载clone方法")]),a._v(" "),e("li",[a._v("使用Apache Commons Lang进行序列化")]),a._v(" "),e("li",[a._v("使用Gson序列化")]),a._v(" "),e("li",[a._v("使用Jackson序列化")])]),a._v(" "),e("p",[e("a",{attrs:{href:"https://wudashan.com/2018/10/14/Java-Deep-Copy/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java如何对一个对象进行深拷贝？ - 吴大山的博客 | Wudashan Blog"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"happen-before原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#happen-before原则"}},[a._v("#")]),a._v(" happen-before原则")]),a._v(" "),e("p",[a._v("这个是java内存模型里的，具体参考")]),a._v(" "),e("p",[e("a",{attrs:{href:"http://interview.xiaoyou66.com/pages/b38788/",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM模型 | 面试问题浓缩总结 (xiaoyou66.com)"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"单例对象会被jvm的gc时回收吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单例对象会被jvm的gc时回收吗"}},[a._v("#")]),a._v(" 单例对象会被jvm的gc时回收吗")]),a._v(" "),e("p",[a._v("java中单例模式创建的对象被自己类中的静态属性所引用，符合第二条，因此，单例对象不会被jvm垃圾收集。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq876551724/article/details/78805138",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java中单例对象不会被GC回收_qq876551724的博客-CSDN博客"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"wait-与sleep-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wait-与sleep-的区别"}},[a._v("#")]),a._v(" wait()与sleep()的区别")]),a._v(" "),e("p",[a._v("简单来说wait()会释放对象锁而sleep()不会释放对象锁")]),a._v(" "),e("h3",{attrs:{id:"synchronized-obj-是锁对象还是代码块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-obj-是锁对象还是代码块"}},[a._v("#")]),a._v(" Synchronized(obj){...}是锁对象还是代码块？")]),a._v(" "),e("p",[a._v("锁的的是对象，因为会修改对象里面的内容")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1A64y1Q7aD",target:"_blank",rel:"noopener noreferrer"}},[a._v("阿里面试题深度解析：Synchronized(obj){...}是锁对象还是代码块？Why？_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"如何分析并找出内存泄漏的位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何分析并找出内存泄漏的位置"}},[a._v("#")]),a._v(" 如何分析并找出内存泄漏的位置")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("在java运行程序的时候，我们可以加入 "),e("code",[a._v("-XX:+HeapDumpOnOutOfMemoryError")]),a._v(" 参数，可以生成dump文件，然后当程序抛出异常后，在程序的classpath下会生成以一个以.hprof结尾的文件，我们可以使用 "),e("code",[a._v("IBM heapAnalyzer")]),a._v(" 来分析head dump文件，并进行排查")])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Java VisualVM远程分析堆")])]),a._v(" "),e("p",[a._v("就是这个工具，这个工具可以查看详细的内存信息")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/07/72df99c895060.png",alt:"image-20210407170434600"}})])])]),a._v(" "),e("p",[a._v("参考：")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000022626513",target:"_blank",rel:"noopener noreferrer"}},[a._v("【赵强老师】如何分析Java的内存溢出问题 - SegmentFault 思否"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"java什么情况下会导致内存泄漏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java什么情况下会导致内存泄漏"}},[a._v("#")]),a._v(" java什么情况下会导致内存泄漏")]),a._v(" "),e("p",[a._v("内存泄漏的表现：")]),a._v(" "),e("ul",[e("li",[a._v("应用程序长时间连续运行时性能严重下降；")]),a._v(" "),e("li",[a._v("应用程序中的OutOfMemoryError堆错误；")]),a._v(" "),e("li",[a._v("自发且奇怪的应用程序崩溃；")]),a._v(" "),e("li",[a._v("应用程序偶尔会耗尽连接对象；")])]),a._v(" "),e("p",[e("strong",[a._v("导致内存泄漏的原因")])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("未关闭的资源导致内存泄漏")]),a._v(" "),e("p",[a._v("每当创建连接或者打开流时，JVM都会为这些资源分配内存。如果没有关闭连接，会导致持续占有内存。在任意情况下，资源留下的开放连接都会消耗内存，如果不处理，就会降低性能，甚至OOM。")]),a._v(" "),e("p",[a._v("解决办法：使用finally块关闭资源；关闭资源的代码，不应该有异常；JDK1.7之后，可以使用太try-with-resource块。")])]),a._v(" "),e("li",[e("p",[a._v("不正确的equals()和hashCode()")])])]),a._v(" "),e("p",[a._v("在HashMap和HashSet这种集合中，常常用到equal()和hashCode()来比较对象，如果重写不合理，将会成为潜在的内存泄漏问题。")]),a._v(" "),e("p",[a._v("解决办法：用最佳的方式重写equals()和hashCode().")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("引用了外部类的内部类")]),a._v(" "),e("p",[a._v("非静态内部类的初始化，总是需要外部类的实例；默认情况下，每个非静态内部类都包含对其外部类的隐式引用，如果我们在应用程序中使用这个内部类对象，那么即使在我们的外部类对象超出范围后，它也不会被垃圾收集器清除掉。")]),a._v(" "),e("p",[a._v("解决办法：如果内部类不需要访问外部类包含的类成员，可以转换为静态类。")])]),a._v(" "),e("li",[e("p",[a._v("finalize方法导致的内存泄漏")]),a._v(" "),e("p",[a._v("重写finalize()方法时，该类的对象不会立即被垃圾收集器收集，如果finalize()方法的代码有问题，那么会潜在的印发OOM；")]),a._v(" "),e("p",[a._v("解决办法：避免重写finalize()方法。")])]),a._v(" "),e("li",[e("p",[a._v("使用ThreadLocal造成内存泄漏")]),a._v(" "),e("p",[a._v("使用ThreadLocal时，每个线程只要处于存活状态就可保留对其ThreadLocal变量副本的隐式调用，且将保留其自己的副本。使用不当，就会引起内存泄漏。")]),a._v(" "),e("p",[a._v("一旦线程不再存在，该线程的threadLocal对象就应该被垃圾收集，而现在线程的创建都是使用线程池，线程池有线程重用的功能，因此线程就不会被垃圾回收器回收。所以使用到ThreadLocal来保留线程池中的线程的变量副本时，ThreadLocal没有显式地删除时，就会一直保留在内存中，不会被垃圾回收。")]),a._v(" "),e("p",[a._v("解决办法：不再使用ThreadLocal时，调用remove()方法，该方法删除了此变量的当前线程值。不要使用ThreadLocal.set(null)，它只是查找与当前线程关联的Map并将键值中这个threadLocal对象所对应的值为null，并没有清除这个键值对。")])])]),a._v(" "),e("p",[a._v("参考：")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000023521531",target:"_blank",rel:"noopener noreferrer"}},[a._v("面试官：小伙子，你给我说一下Java中什么情况会导致内存泄漏呢？ - SegmentFault 思否"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"javaguide上收集的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javaguide上收集的"}},[a._v("#")]),a._v(" javaGuide上收集的")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://snailclimb.gitee.io/javaguide/#/docs/java/basis/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaGuide (gitee.io)"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"import-java-和-javax-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-java-和-javax-有什么区别"}},[a._v("#")]),a._v(" import java 和 javax 有什么区别？")]),a._v(" "),e("p",[a._v("刚开始的时候 JavaAPI 所必需的包是 java 开头的包，javax 当时只是扩展 API 包来使用。然而随着时间的推移，javax 逐渐地扩展成为 Java API 的组成部分。但是，将扩展从 javax 包移动到 java 包确实太麻烦了，最终会破坏一堆现有的代码。因此，最终决定 javax 包将成为标准 API 的一部分。")]),a._v(" "),e("p",[a._v("所以，实际上 java 和 javax 没有区别。这都是一个名字。")]),a._v(" "),e("h3",{attrs:{id:"说说-sleep-方法和-wait-方法区别和共同点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说说-sleep-方法和-wait-方法区别和共同点"}},[a._v("#")]),a._v(" 说说 sleep 方法和 wait 方法区别和共同点")]),a._v(" "),e("ul",[e("li",[a._v("两者最主要的区别在于："),e("code",[a._v("sleep()")]),a._v(" 方法没有释放锁，而 "),e("code",[a._v("wait()")]),a._v(" 方法释放了锁 。")]),a._v(" "),e("li",[a._v("两者都可以暂停线程的执行。")]),a._v(" "),e("li",[e("code",[a._v("wait()")]),a._v(" 通常被用于线程间交互/通信，"),e("code",[a._v("sleep()")]),a._v("通常被用于暂停执行。")]),a._v(" "),e("li",[e("code",[a._v("wait()")]),a._v(" 方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的 "),e("code",[a._v("notify()")]),a._v("或者 "),e("code",[a._v("notifyAll()")]),a._v(" 方法。"),e("code",[a._v("sleep()")]),a._v("方法执行完成后，线程会自动苏醒。或者可以使用 "),e("code",[a._v("wait(long timeout)")]),a._v(" 超时后线程会自动苏醒。")])]),a._v(" "),e("h3",{attrs:{id:"为什么我们调用-start-方法时会执行-run-方法-为什么我们不能直接调用-run-方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么我们调用-start-方法时会执行-run-方法-为什么我们不能直接调用-run-方法"}},[a._v("#")]),a._v(" 为什么我们调用-start-方法时会执行-run-方法，为什么我们不能直接调用-run-方法？")]),a._v(" "),e("p",[a._v("这是另一个非常经典的 java 多线程面试问题，而且在面试中会经常被问到。很简单，但是很多人都会答不上来！")]),a._v(" "),e("p",[a._v("new 一个 Thread，线程进入了新建状态。调用 "),e("code",[a._v("start()")]),a._v("方法，会启动一个线程并使线程进入了就绪状态，当分配到时间片后就可以开始运行了。 "),e("code",[a._v("start()")]),a._v(" 会执行线程的相应准备工作，然后自动执行 "),e("code",[a._v("run()")]),a._v(" 方法的内容，这是真正的多线程工作。 但是，直接执行 "),e("code",[a._v("run()")]),a._v(" 方法，会把 "),e("code",[a._v("run()")]),a._v(" 方法当成一个 main 线程下的普通方法去执行，并不会在某个线程中执行它，所以这并不是多线程工作。")]),a._v(" "),e("p",[e("strong",[a._v("总结： 调用 "),e("code",[a._v("start()")]),a._v(" 方法方可启动线程并使线程进入就绪状态，直接执行 "),e("code",[a._v("run()")]),a._v(" 方法的话不会以多线程的方式执行。")])]),a._v(" "),e("h2",{attrs:{id:"牛客网上收集的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#牛客网上收集的"}},[a._v("#")]),a._v(" 牛客网上收集的")]),a._v(" "),e("h3",{attrs:{id:"用java来实现生产者消费者模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用java来实现生产者消费者模型"}},[a._v("#")]),a._v(" 用java来实现生产者消费者模型")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000024444906",target:"_blank",rel:"noopener noreferrer"}},[a._v("多线程必考的「生产者 - 消费者」模型，看齐姐这篇文章就够了 - SegmentFault 思否"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"oom问题产生原因以及如何解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oom问题产生原因以及如何解决"}},[a._v("#")]),a._v(" OOM问题产生原因以及如何解决")]),a._v(" "),e("h4",{attrs:{id:"java-heap-space"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-heap-space"}},[a._v("#")]),a._v(" Java heap space")]),a._v(" "),e("p",[a._v("当堆内存（Heap Space）没有足够空间存放新创建的对象时，就会抛出 "),e("code",[a._v("java.lang.OutOfMemoryError:Javaheap space")]),a._v(" 错误（根据实际生产经验，可以对程序日志中的 OutOfMemoryError 配置关键字告警，一经发现，立即处理）。")]),a._v(" "),e("p",[e("strong",[a._v("原因分析")])]),a._v(" "),e("p",[e("code",[a._v("Javaheap space")]),a._v(" 错误产生的常见原因可以分为以下几类：")]),a._v(" "),e("p",[a._v("1、请求创建一个超大对象，通常是一个大数组。")]),a._v(" "),e("p",[a._v("2、超出预期的访问量/数据量，通常是上游系统请求流量飙升，常见于各类促销/秒杀活动，可以结合业务流量指标排查是否有尖状峰值。")]),a._v(" "),e("p",[a._v("3、过度使用终结器（Finalizer），该对象没有立即被 GC。")]),a._v(" "),e("p",[a._v("4、内存泄漏（Memory Leak），大量对象引用没有释放，JVM 无法对其自动回收，常见于使用了 File 等资源没有回收。")]),a._v(" "),e("p",[e("strong",[a._v("解决方案")])]),a._v(" "),e("p",[a._v("针对大部分情况，通常只需要通过 "),e("code",[a._v("-Xmx")]),a._v(" 参数调高 JVM 堆内存空间即可。如果仍然没有解决，可以参考以下情况做进一步处理：")]),a._v(" "),e("p",[a._v("1、如果是超大对象，可以检查其合理性，比如是否一次性查询了数据库全部结果，而没有做结果数限制。")]),a._v(" "),e("p",[a._v("2、如果是业务峰值压力，可以考虑添加机器资源，或者做限流降级。")]),a._v(" "),e("p",[a._v("3、如果是内存泄漏，需要找到持有的对象，修改代码设计，比如关闭没有释放的连接。")]),a._v(" "),e("h4",{attrs:{id:"gc-overhead-limit-exceeded"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gc-overhead-limit-exceeded"}},[a._v("#")]),a._v(" GC overhead limit exceeded")]),a._v(" "),e("p",[a._v("当 Java 进程花费 98% 以上的时间执行 GC，但只恢复了不到 2% 的内存，且该动作连续重复了 5 次，就会抛出 "),e("code",[a._v("java.lang.OutOfMemoryError:GC overhead limit exceeded")]),a._v(" 错误。简单地说，就是应用程序已经基本耗尽了所有可用内存， GC 也无法回收。")]),a._v(" "),e("p",[a._v("此类问题的原因与解决方案跟 "),e("code",[a._v("Javaheap space")]),a._v(" 非常类似，可以参考上文。")]),a._v(" "),e("h4",{attrs:{id:"permgen-space"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permgen-space"}},[a._v("#")]),a._v(" Permgen space")]),a._v(" "),e("p",[a._v("该错误表示永久代（Permanent Generation）已用满，通常是因为加载的 class 数目太多或体积太大。")]),a._v(" "),e("p",[e("strong",[a._v("原因分析")])]),a._v(" "),e("p",[a._v("永久代存储对象主要包括以下几类：")]),a._v(" "),e("p",[a._v("1、加载/缓存到内存中的 class 定义，包括类的名称，字段，方法和字节码；")]),a._v(" "),e("p",[a._v("2、常量池；")]),a._v(" "),e("p",[a._v("3、对象数组/类型数组所关联的 class；")]),a._v(" "),e("p",[a._v("4、JIT 编译器优化后的 class 信息。")]),a._v(" "),e("p",[a._v("PermGen 的使用量与加载到内存的 class 的数量/大小正相关。")]),a._v(" "),e("p",[e("strong",[a._v("解决方案")])]),a._v(" "),e("p",[a._v("根据 Permgen space 报错的时机，可以采用不同的解决方案，如下所示：")]),a._v(" "),e("p",[a._v("1、程序启动报错，修改 "),e("code",[a._v("-XX:MaxPermSize")]),a._v(" 启动参数，调大永久代空间。")]),a._v(" "),e("p",[a._v("2、应用重新部署时报错，很可能是没有应用没有重启，导致加载了多份 class 信息，只需重启 JVM 即可解决。")]),a._v(" "),e("p",[a._v("3、运行时报错，应用程序可能会动态创建大量 class，而这些 class 的生命周期很短暂，但是 JVM 默认不会卸载 class，可以设置 "),e("code",[a._v("-XX:+CMSClassUnloadingEnabled")]),a._v(" 和 "),e("code",[a._v("-XX:+UseConcMarkSweepGC")]),a._v("这两个参数允许 JVM 卸载 class。")]),a._v(" "),e("p",[a._v("如果上述方法无法解决，可以通过 jmap 命令 dump 内存对象 "),e("code",[a._v("jmap-dump:format=b,file=dump.hprof<process-id>")]),a._v(" ，然后利用 Eclipse MAT https://www.eclipse.org/mat 功能逐一分析开销最大的 classloader 和重复 class。")]),a._v(" "),e("h4",{attrs:{id:"metaspace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metaspace"}},[a._v("#")]),a._v(" Metaspace")]),a._v(" "),e("p",[a._v("JDK 1.8 使用 Metaspace 替换了永久代（Permanent Generation），该错误表示 Metaspace 已被用满，通常是因为加载的 class 数目太多或体积太大。")]),a._v(" "),e("p",[a._v("此类问题的原因与解决方法跟 "),e("code",[a._v("Permgenspace")]),a._v(" 非常类似，可以参考上文。需要特别注意的是调整 Metaspace 空间大小的启动参数为 "),e("code",[a._v("-XX:MaxMetaspaceSize")]),a._v("。")]),a._v(" "),e("h4",{attrs:{id:"unable-to-create-new-native-thread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-create-new-native-thread"}},[a._v("#")]),a._v(" Unable to create new native thread")]),a._v(" "),e("p",[a._v("每个 Java 线程都需要占用一定的内存空间，当 JVM 向底层操作系统请求创建一个新的 native 线程时，如果没有足够的资源分配就会报此类错误。")]),a._v(" "),e("p",[e("strong",[a._v("原因分析")])]),a._v(" "),e("p",[a._v("JVM 向 OS 请求创建 native 线程失败，就会抛出 "),e("code",[a._v("Unableto createnewnativethread")]),a._v("，常见的原因包括以下几类：")]),a._v(" "),e("p",[a._v("1、线程数超过操作系统最大线程数 ulimit 限制；")]),a._v(" "),e("p",[a._v("2、线程数超过 kernel.pid_max（只能重启）；")]),a._v(" "),e("p",[a._v("3、native 内存不足；")]),a._v(" "),e("p",[a._v("该问题发生的常见过程主要包括以下几步：")]),a._v(" "),e("p",[a._v("1、JVM 内部的应用程序请求创建一个新的 Java 线程；")]),a._v(" "),e("p",[a._v("2、JVM native 方法代理了该次请求，并向操作系统请求创建一个 native 线程；")]),a._v(" "),e("p",[a._v("3、操作系统尝试创建一个新的 native 线程，并为其分配内存；")]),a._v(" "),e("p",[a._v("4、如果操作系统的虚拟内存已耗尽，或是受到 32 位进程的地址空间限制，操作系统就会拒绝本次 native 内存分配；")]),a._v(" "),e("p",[a._v("5、JVM 将抛出 "),e("code",[a._v("java.lang.OutOfMemoryError:Unableto createnewnativethread")]),a._v(" 错误。")]),a._v(" "),e("p",[e("strong",[a._v("解决方案")])]),a._v(" "),e("p",[a._v("1、升级配置，为机器提供更多的内存；")]),a._v(" "),e("p",[a._v("2、降低 Java Heap Space 大小；")]),a._v(" "),e("p",[a._v("3、修复应用程序的线程泄漏问题；")]),a._v(" "),e("p",[a._v("4、限制线程池大小；")]),a._v(" "),e("p",[a._v("5、使用 -Xss 参数减少线程栈的大小；")]),a._v(" "),e("p",[a._v("6、调高 OS 层面的线程最大数：执行 "),e("code",[a._v("ulimia-a")]),a._v(" 查看最大线程数限制，使用 "),e("code",[a._v("ulimit-u xxx")]),a._v(" 调整最大线程数限制。")]),a._v(" "),e("p",[a._v("ulimit -a .... 省略部分内容 ..... max user processes (-u) 16384")]),a._v(" "),e("h4",{attrs:{id:"out-of-swap-space"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#out-of-swap-space"}},[a._v("#")]),a._v(" Out of swap space？")]),a._v(" "),e("p",[a._v("该错误表示所有可用的虚拟内存已被耗尽。虚拟内存（Virtual Memory）由物理内存（Physical Memory）和交换空间（Swap Space）两部分组成。当运行时程序请求的虚拟内存溢出时就会报 "),e("code",[a._v("Outof swap space?")]),a._v(" 错误。")]),a._v(" "),e("p",[e("strong",[a._v("原因分析")])]),a._v(" "),e("p",[a._v("该错误出现的常见原因包括以下几类：")]),a._v(" "),e("p",[a._v("1、地址空间不足；")]),a._v(" "),e("p",[a._v("2、物理内存已耗光；")]),a._v(" "),e("p",[a._v("3、应用程序的本地内存泄漏（native leak），例如不断申请本地内存，却不释放。")]),a._v(" "),e("p",[a._v("4、执行 "),e("code",[a._v("jmap-histo:live<pid>")]),a._v(" 命令，强制执行 Full GC；如果几次执行后内存明显下降，则基本确认为 Direct ByteBuffer 问题。")]),a._v(" "),e("p",[e("strong",[a._v("解决方案")])]),a._v(" "),e("p",[a._v("根据错误原因可以采取如下解决方案：")]),a._v(" "),e("p",[a._v("1、升级地址空间为 64 bit；")]),a._v(" "),e("p",[a._v("2、使用 Arthas 检查是否为 Inflater/Deflater 解压缩问题，如果是，则显式调用 end 方法。")]),a._v(" "),e("p",[a._v("3、Direct ByteBuffer 问题可以通过启动参数 "),e("code",[a._v("-XX:MaxDirectMemorySize")]),a._v(" 调低阈值。")]),a._v(" "),e("p",[a._v("4、升级服务器配置/隔离部署，避免争用。")]),a._v(" "),e("h4",{attrs:{id:"kill-process-or-sacrifice-child"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kill-process-or-sacrifice-child"}},[a._v("#")]),a._v(" Kill process or sacrifice child")]),a._v(" "),e("p",[a._v("有一种内核作业（Kernel Job）名为 Out of Memory Killer，它会在可用内存极低的情况下“杀死”（kill）某些进程。OOM Killer 会对所有进程进行打分，然后将评分较低的进程“杀死”，具体的评分规则可以参考 Surviving the Linux OOM Killer。")]),a._v(" "),e("p",[a._v("不同于其他的 OOM 错误， "),e("code",[a._v("Killprocessorsacrifice child")]),a._v(" 错误不是由 JVM 层面触发的，而是由操作系统层面触发的。")]),a._v(" "),e("p",[e("strong",[a._v("原因分析")])]),a._v(" "),e("p",[a._v("默认情况下，Linux 内核允许进程申请的内存总量大于系统可用内存，通过这种“错峰复用”的方式可以更有效的利用系统资源。")]),a._v(" "),e("p",[a._v("然而，这种方式也会无可避免地带来一定的“超卖”风险。例如某些进程持续占用系统内存，然后导致其他进程没有可用内存。此时，系统将自动激活 OOM Killer，寻找评分低的进程，并将其“杀死”，释放内存资源。")]),a._v(" "),e("p",[e("strong",[a._v("解决方案")])]),a._v(" "),e("p",[a._v("1、升级服务器配置/隔离部署，避免争用。")]),a._v(" "),e("p",[a._v("2、OOM Killer 调优。")]),a._v(" "),e("h4",{attrs:{id:"requested-array-size-exceeds-vm-limit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requested-array-size-exceeds-vm-limit"}},[a._v("#")]),a._v(" Requested array size exceeds VM limit")]),a._v(" "),e("p",[a._v("JVM 限制了数组的最大长度，该错误表示程序请求创建的数组超过最大长度限制。")]),a._v(" "),e("p",[a._v("JVM 在为数组分配内存前，会检查要分配的数据结构在系统中是否可寻址，通常为 "),e("code",[a._v("Integer.MAX_VALUE-2")]),a._v("。")]),a._v(" "),e("p",[a._v("此类问题比较罕见，通常需要检查代码，确认业务是否需要创建如此大的数组，是否可以拆分为多个块，分批执行。")]),a._v(" "),e("h4",{attrs:{id:"direct-buffer-memory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#direct-buffer-memory"}},[a._v("#")]),a._v(" Direct buffer memory")]),a._v(" "),e("p",[a._v("Java 允许应用程序通过 Direct ByteBuffer 直接访问堆外内存，许多高性能程序通过 Direct ByteBuffer 结合内存映射文件（Memory Mapped File）实现高速 IO。")]),a._v(" "),e("p",[e("strong",[a._v("原因分析")])]),a._v(" "),e("p",[a._v("Direct ByteBuffer 的默认大小为 64 MB，一旦使用超出限制，就会抛出 "),e("code",[a._v("Directbuffer memory")]),a._v(" 错误。")]),a._v(" "),e("p",[e("strong",[a._v("解决方案")])]),a._v(" "),e("p",[a._v("1、Java 只能通过 ByteBuffer.allocateDirect 方法使用 Direct ByteBuffer，因此，可以通过 Arthas 等在线诊断工具拦截该方法进行排查。")]),a._v(" "),e("p",[a._v("2、检查是否直接或间接使用了 NIO，如 netty，jetty 等。")]),a._v(" "),e("p",[a._v("3、通过启动参数 "),e("code",[a._v("-XX:MaxDirectMemorySize")]),a._v(" 调整 Direct ByteBuffer 的上限值。")]),a._v(" "),e("p",[a._v("4、检查 JVM 参数是否有 "),e("code",[a._v("-XX:+DisableExplicitGC")]),a._v(" 选项，如果有就去掉，因为该参数会使 "),e("code",[a._v("System.gc()")]),a._v(" 失效。")]),a._v(" "),e("p",[a._v("5、检查堆外内存使用代码，确认是否存在内存泄漏；或者通过反射调用 "),e("code",[a._v("sun.misc.Cleaner")]),a._v(" 的 "),e("code",[a._v("clean()")]),a._v(" 方法来主动释放被 Direct ByteBuffer 持有的内存空间。")]),a._v(" "),e("p",[a._v("6、内存容量确实不足，升级配置。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1480668",target:"_blank",rel:"noopener noreferrer"}},[a._v("教你分析9种 OOM 常见原因及解决方案 - 云+社区 - 腾讯云 (tencent.com)"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"string-从-abc-到-abcd-如何分配内存的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-从-abc-到-abcd-如何分配内存的"}},[a._v("#")]),a._v(' string 从 "abc" 到 "abcd"，如何分配内存的')]),a._v(" "),e("p",[a._v("string是不可以修改的，所以我们堆string进行加操作时操作系统会新创建一个对象然后修改对象引用")]),a._v(" "),e("p",[a._v('String s1 = "abc";\ns1 += "d";\nSystem.out.println(s1); // "abcd"\n// 内存中有"abc"，"abcd"两个对象，s1从指向"abc"，改变指向，指向了"abcd"。')]),a._v(" "),e("h3",{attrs:{id:"string-和-byte-如何转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-和-byte-如何转换"}},[a._v("#")]),a._v(" string 和 []byte 如何转换")]),a._v(" "),e("p",[a._v("String转byte[]，就是先转ASCII码（可能还有GBK或者utf-8），然后再转成二进制，如，A->65->65的二进制表示.")]),a._v(" "),e("h3",{attrs:{id:"while-tree-sleep-1-是干嘛的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#while-tree-sleep-1-是干嘛的"}},[a._v("#")]),a._v(" while(tree) {sleep(1)} 是干嘛的")]),a._v(" "),e("p",[a._v("网上找的相关资料说使用sleep可以让线程休眠，避免占用CPU资源")]),a._v(" "),e("h2",{attrs:{id:"自己面试遇到的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自己面试遇到的"}},[a._v("#")]),a._v(" 自己面试遇到的")]),a._v(" "),e("h3",{attrs:{id:"面向对象三大特性六大原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面向对象三大特性六大原则"}},[a._v("#")]),a._v(" 面向对象三大特性六大原则")]),a._v(" "),e("p",[a._v('面向对象的三大特性是"封装、"多态"、"继承"，五大原则是"单一职责原则"、"开放封闭原则"、"里氏替换原则"、"依赖倒置原则"、"接口分离原则"、"迪米特原则（高内聚低耦合）"。')]),a._v(" "),e("p",[e("strong",[a._v("单一职责原则SRP(Single Responsibility Principle)")])]),a._v(" "),e("p",[a._v("是指一个类的功能要单一，不能包罗万象。")]),a._v(" "),e("p",[e("strong",[a._v("开放封闭原则OCP(Open－Close Principle)")])]),a._v(" "),e("p",[a._v("一个模块在扩展性方面应该是开放的而在更改性方面应该是封闭的")]),a._v(" "),e("p",[e("strong",[a._v("里式替换原则LSP(the Liskov Substitution Principle LSP)")])]),a._v(" "),e("p",[a._v("子类应当可以替换父类并出现在父类能够出现的任何地方。")]),a._v(" "),e("p",[e("strong",[a._v("依赖倒置原则DIP(the Dependency Inversion Principle DIP)")])]),a._v(" "),e("p",[a._v("A.高层次的模块不应该依赖于低层次的模块，他们都应该依赖于抽象。")]),a._v(" "),e("p",[a._v("B.抽象不应该依赖于具体实现，具体实现应该依赖于抽象。")]),a._v(" "),e("p",[a._v("具体依赖抽象，上层依赖下层。高层模块就是调用端，底层模块就是具体实现类。（应该让底层模块定义抽象接口并且实现，让高层模块调用抽象接口，而不是直接调用实现类。）")]),a._v(" "),e("p",[e("strong",[a._v("接口分离原则ISP(the Interface Segregation Principle ISP)")])]),a._v(" "),e("p",[a._v("模块间要通过抽象接口隔离开，而不是通过具体的类强耦合起来，即面向接口编程。（提供接口，给其他模块调用）")]),a._v(" "),e("p",[e("strong",[a._v("迪米特法则（Law of Demeter,简称LoD）")])]),a._v(" "),e("p",[a._v("通俗来讲：一个类对自己依赖的类知道的越少越好。自从我们接触编程开始，就知道了软件编程的总的原则：低耦合，高内聚。无论是面向过程编程还是面向对象编程，只有使各个模块之间的耦合尽量的低，才能提高代码的复用率。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/u014590757/article/details/79815831",target:"_blank",rel:"noopener noreferrer"}},[a._v("1.面向对象三大特性六大原则_郑学炜的技术博客-CSDN博客"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"什么是多态-多态怎么实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是多态-多态怎么实现"}},[a._v("#")]),a._v(" 什么是多态？多态怎么实现？")]),a._v(" "),e("p",[a._v("多态是同一个行为具有多个不同表现形式或形态的能力。多态就是同一个接口，使用不同的实例而执行不同操作")]),a._v(" "),e("p",[e("strong",[a._v("多态存在的必要条件")])]),a._v(" "),e("ul",[e("li",[a._v("继承")]),a._v(" "),e("li",[a._v("重写")]),a._v(" "),e("li",[a._v("父类引用指向子类对象："),e("strong",[a._v("Parent p = new Child();")])])]),a._v(" "),e("p",[e("strong",[a._v("多态通常有两种实现方法：")])]),a._v(" "),e("ol",[e("li",[a._v("子类继承父类（extends）可以重载或者重写")]),a._v(" "),e("li",[a._v("类实现接口（implements）")]),a._v(" "),e("li",[a._v("抽象类或者抽象方法")])]),a._v(" "),e("h3",{attrs:{id:"java定时任务实现方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java定时任务实现方式"}},[a._v("#")]),a._v(" java定时任务实现方式")]),a._v(" "),e("h4",{attrs:{id:"jdk-自带的定时器实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdk-自带的定时器实现"}},[a._v("#")]),a._v(" JDK 自带的定时器实现")]),a._v(" "),e("p",[a._v("这个类允许你调度一个java.util.TimerTask任务。主要有以下几个方法：")]),a._v(" "),e("p",[a._v("schedule(TimerTask task, long delay) 延迟 delay 毫秒 执行")]),a._v(" "),e("p",[a._v("schedule(TimerTask task, Date time) 特定时间執行")]),a._v(" "),e("p",[a._v("schedule(TimerTask task, long delay, long period) 延迟 delay 执行并每隔period 执行一次")]),a._v(" "),e("h4",{attrs:{id:"quartz-定时器实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quartz-定时器实现"}},[a._v("#")]),a._v(" Quartz 定时器实现")]),a._v(" "),e("p",[a._v("Quartz是一个完全由Java编写的开源作业调度框架，为在Java应用程序中进行作业调度提供了简单却强大的机制。")]),a._v(" "),e("p",[a._v("Quartz允许开发人员根据时间间隔来调度作业。它实现了作业和触发器的多对多的关系，还能把多个作业与不同的触发器关联。可以动态的添加删除定时任务，另外很好的支撑集群调度。简单地创建一个org.quarz.Job接口的Java类。")]),a._v(" "),e("h4",{attrs:{id:"spring-相关的任务调度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-相关的任务调度"}},[a._v("#")]),a._v(" Spring 相关的任务调度")]),a._v(" "),e("p",[a._v("Spring 3.0+ 自带的任务调度实现，主要依靠TaskScheduler接口的几个实现类实现。删除和修改任务比较麻烦。\n主要用法有三种： Spring配置文件实现、注解实现、代码动态添加")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/xybelieve1990/article/details/87875190",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 定时任务的几种实现方式_好习惯要坚持下去-CSDN博客_java定时任务"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);