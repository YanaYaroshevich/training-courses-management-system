package org.exadel.training.controller;

import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import javax.servlet.http.HttpServletResponse;
import java.io.*;

@Controller
public class FileUploadDownloadController {

	@RequestMapping(value = "/downloadFile", method = RequestMethod.GET)
	public void downloadFileHandler(@RequestParam("file") String file, HttpServletResponse response) {

		try {
			// Creating the directory to store file
			File dir = new File(System.getProperty("user.home")+"\\Downloads");
			if (!dir.exists())
				dir.mkdirs();

			// Create the file on server
			File serverFile = new File(dir.getAbsolutePath()
					+ File.separator + file);
			if(serverFile.exists()) {
				String fileName = "attachment; filename=";
				fileName += file;
				if (serverFile.exists()) {
					//response.setContentType("application/txt");
					response.setContentLength(new Long(serverFile.length()).intValue());
					response.setHeader("Content-Disposition", fileName);
					FileCopyUtils.copy(new FileInputStream(serverFile), response.getOutputStream());
				}
				response.flushBuffer();
			}
		} catch (Exception e) {
			//return "You failed to upload " + file + " => " + e.getMessage();
		}
	}

	@RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
	public @ResponseBody
	String uploadFileHandler(@RequestParam("file") MultipartFile file) {

		if (!file.isEmpty()) {
			try {
				byte[] bytes = file.getBytes();

				// Creating the directory to store file
				File dir = new File(System.getProperty("user.home")+"\\Downloads");
				if (!dir.exists())
					dir.mkdirs();

				// Create the file on server
				File serverFile = new File(dir.getAbsolutePath()
						+ File.separator + file.getOriginalFilename());
				BufferedOutputStream stream = new BufferedOutputStream(
						new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();


				return "You successfully uploaded file=" + file.getOriginalFilename();
			} catch (Exception e) {
				return "You failed to upload " + file.getOriginalFilename() + " => " + e.getMessage();
			}
		} else {
			return "You failed to upload " + file.getOriginalFilename() + " because the file was empty.";
		}
	}
}
