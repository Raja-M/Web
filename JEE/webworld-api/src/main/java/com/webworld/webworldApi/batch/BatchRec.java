package com.webworld.webworldApi.batch;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BatchRec {
	
	@Id
	private int id ;
	private String name;
	private String status;
	private int age;
	
	
	public BatchRec() {
	}
	
	public BatchRec(int id, String name, String status, int age) {
		super();
		this.id = id;
		this.name = name;
		this.status = status;
		this.age = age;
	}

	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	

}
