XML-XMLParser_FILES = \
packages/xml/parser/XML.st 
$(XML-XMLParser_FILES):
$(srcdir)/packages/xml/parser/stamp-classes: $(XML-XMLParser_FILES)
	touch $(srcdir)/packages/xml/parser/stamp-classes
