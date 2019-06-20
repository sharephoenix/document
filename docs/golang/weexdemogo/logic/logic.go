package logic

import (
	"github.com/gin-gonic/gin"
	"weexdemogo/model"
	"weexdemogo/datastruct"
	"fmt"
	"net/http"
	"github.com/gin-contrib/cors"
)

var SuccessCode = 200
var FailDefaultCode = -1

func init() {
	Start()
}

func Start() {
	router := gin.Default()

	// 服务器支持跨域配置
	 config := cors.DefaultConfig()
	 config.AllowAllOrigins = true
	 router.Use(cors.New(config))

	if router == nil {
		fmt.Println("gin 初始化失败")
		return
	}
	// 查询所有数据
	router.GET("/demo/all", func(c *gin.Context) {
		fmt.Println("oooook_start")
		model, err := model.SelectAllData()
		fmt.Println("oooook")
		if err != nil {
			c.JSON(http.StatusOK, datastruct.Response(FailDefaultCode, err.Error(), model))
			return
		}
		c.JSON(http.StatusOK, datastruct.Response(SuccessCode, "success", model))
	})

	// 查询所有的 modules
	router.GET("/demo/module", func(c *gin.Context) {
		model, err := model.SelectAllModule()
		if err != nil {
			c.JSON(http.StatusOK, datastruct.Response(FailDefaultCode, err.Error(), model))
			return
		}
		c.JSON(http.StatusOK, datastruct.Response(SuccessCode, "success", model))
	})

	// 查询对应 moduleid 下的所有事件
	router.GET("/demo/events/:moduleId", func(c *gin.Context) {
		moduleId := c.Param("moduleId")
		a, _ := c.GetQueryArray("a")
		fmt.Println(a)
		model, err := model.SelectEvents(moduleId)

		if err != nil {
			c.JSON(http.StatusOK, datastruct.Response(FailDefaultCode, err.Error(), model))
			return
		}
		c.JSON(http.StatusOK, datastruct.Response(SuccessCode, "success", model))
	})

	// 查询对应 moduleid 下的所有事件
	router.GET("", func(c *gin.Context) {
		c.JSON(http.StatusOK, datastruct.Response(FailDefaultCode, "没有找到相关数据", nil))
	})
	router.Run(":80")
}

