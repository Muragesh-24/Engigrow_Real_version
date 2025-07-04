package main

import (
    "engigrow/scripts"
    "fmt"
    "github.com/gin-gonic/gin"
)

func main() {

    scripts.ConnectToDatabase()
    scripts.DbAutomigrate()
    fmt.Println("🚀 Starting Engigrow Server...")

    r := gin.Default()
    r.GET("/engigrow/setup", func(c *gin.Context) {
        c.JSON(200, gin.H{"status": "ok"})
    })


    r.Run(":8080")
}
