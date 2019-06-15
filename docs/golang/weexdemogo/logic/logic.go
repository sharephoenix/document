package logic

import (
	"github.com/gin-gonic/gin"
	"weexdemogo/model"
	"weexdemogo/datastruct"
	"fmt"
	"net/http"
)

var SuccessCode = 200
var FailDefaultCode = -1

func init() {
	Start()
}

func Start() {
	router := gin.Default()
	if router == nil {
		fmt.Println("gin 初始化失败")
		return
	}
	// 查询所有数据
	router.GET("/demo/all", func(c *gin.Context) {
		model, err := model.SelectAllData()
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
	router.Run(":8080")
}

