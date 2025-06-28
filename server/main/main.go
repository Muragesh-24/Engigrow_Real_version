package main

import (
    "engigrow/scripts"
    "fmt"
    "github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("🟡 Main.go started")
    scripts.ConnectToDatabase()
    scripts.DbAutomigrate()
    fmt.Println("🚀 Starting Engigrow Server...")

    r := gin.Default()
    r.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{"status": "ok"})
    })


    r.Run(":8080")
}
