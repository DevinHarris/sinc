package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func getHome(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, gin.H{"message": "Home route working!"})
}

func getWorkouts(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, gin.H{"message": "Workouts route"})
}

func getDiet(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, gin.H{"message": "Diets route"})
}

func main() {

	router := gin.Default()
	router.GET("/", getHome)
	router.GET("/workouts", getWorkouts)
	router.GET("/diet", getDiet)

	router.Run("localhost:8080")
}
