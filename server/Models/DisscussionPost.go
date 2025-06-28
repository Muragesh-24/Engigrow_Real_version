package models

import "gorm.io/gorm"

type Review struct {
    gorm.Model
    UserID  uint   `json:"userId"`  
    PostID  uint   `json:"postId"`  
    Text    string `json:"text"`   
}
