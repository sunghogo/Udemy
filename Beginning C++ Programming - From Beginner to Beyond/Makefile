# Makefile to clean executables in all project directories

# Target to clean executables in all directories
clean:
	@echo "Cleaning up executables..."
	@find . -type f -executable -print0 | xargs -0 rm -f
	@echo "Clean up complete."
