package com.webworld.webworldApi.Batch;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class BatchController {
	
	
	@Autowired
	private  BatchService  batchService ;
	
	@RequestMapping("/BatchRecs")
	public List<BatchRec> getAllTopics() {
		return  batchService.getallTopics();
				
	}
	@RequestMapping("/BatchRec/{id}")
	public BatchRec getBatch(@PathVariable("id") int id ) {
		return batchService.getBatchrRec(id);
	}
	
	@RequestMapping( method=RequestMethod.POST, value="/BatchRec" )
	public void addBatch(@RequestBody BatchRec batchrec) {
		batchService.addBatch( batchrec);
		
	}
	@RequestMapping( method=RequestMethod.PUT, value="/BatchRec/{id}" )
	public void updateBatch(@RequestBody BatchRec batchrec, @PathVariable("id") int id) {
		batchService.updateBatch( id, batchrec);
		
	}
	@RequestMapping( method=RequestMethod.DELETE, value="/BatchRec/{id}" )
	public void deleteBatch(@RequestBody BatchRec batchrec, @PathVariable("id") int id) {
		batchService.deleteBatch( id ); 
		
	}
	
}
