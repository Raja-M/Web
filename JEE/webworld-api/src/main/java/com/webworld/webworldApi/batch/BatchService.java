package com.webworld.webworldApi.batch;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BatchService {
	
	@Autowired
	private BatchRepository batchrepository;
	
	/*
	private List<BatchRec> batchrecs =   new ArrayList<> (Arrays.asList( 
			new BatchRec(1, "COS", "CF", 3 ),
			new BatchRec(2, "NIC", "CF", 3 ),
			new BatchRec(3, "CDB", "CF", 3 ),
			new BatchRec(4, "ACI", "CF", 3 ),
			new BatchRec(5, "COS_CLM_ADJD_MCE", "CF", 3 )
			));
	*/
	public List<BatchRec> getallTopics() {
		//return batchrecs;
		List<BatchRec> btchrecs = new ArrayList<>();
		batchrepository.findAll().forEach( btchrecs::add );
		return btchrecs;
		
	}
	public BatchRec getBatchrRec ( int id ) {
		//return batchrecs.stream().filter(b -> String.valueOf(  b.getId()).equals(String.valueOf(id))).findFirst().get();
		return batchrepository.findOne(id);
	}
	public void addBatch(BatchRec batchrec) {
	//	System.out.println(batchrec.getId());
	//	batchrecs.add(batchrec);
		
		batchrepository.save(batchrec);
	}
	
	public void updateBatch(int id, BatchRec batchrec) {
	//	System.out.println(batchrec.getId());
		/*
		for ( int i = 0; i < batchrecs.size(); i++) {
			BatchRec b = batchrecs.get(i);
			if( b.getId() == id  ) {
				batchrecs.set(i, batchrec);
				return;
			}
		}	
		*/
		batchrepository.save(batchrec);
		
	}

	public void deleteBatch(int id) {
		//batchrecs.removeIf( t -> t.getId() == id );
		batchrepository.delete(id);
	
		
	}

}
